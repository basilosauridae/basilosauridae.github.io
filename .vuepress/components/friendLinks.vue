<template>
  <div class="friend-links-container">
    <div
      v-for="item in links"
      :key="item.link"
      class="fl-card"
      @click="open(item.link)"
    >
      <span class="fl-card__bg"></span>
      <div class="fl-card__logo">
        <img :src="item.logo" :alt="item.title" />
      </div>
      <span class="fl-card__title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
// 复刻 vuepress-theme-reco 的 FriendshipLink 布局 + MagicCard 悬浮光晕效果
// 样式来源:reco/lib/client/styles/friendshipLink.css、magicCard.css
// 交互来源:reco/lib/client/composables/useMagicCard.js(mousemove 节流 50ms 设置 --x/--y)
import { onMounted, onBeforeUnmount } from 'vue'

defineOptions({ name: 'FriendLinks' })

const links = [
  {
    title: "阮一峰的网络日志",
    logo: "https://www.ruanyifeng.com/blog/images/person2.jpg",
    link: "https://www.ruanyifeng.com/blog/"
  },
  {
    title: "7gugu's Blog",
    logo: "https://7gugu.com/wp-content/uploads/2018/01/favicon.png",
    link: "https://7gugu.com/"
  },
  {
    title: "❖星港◎Star☆",
    logo: "https://bu.dusays.com/2025/04/11/67f92f6fcfb26.webp",
    link: "https://blog.starsharbor.com/"
  },
  {
    title: "Hsu Yeung 的博客",
    logo: "https://www.hsuyeung.com/img/avatar.jpg",
    link: "https://www.hsuyeung.com/"
  },
  {
    title: "清羽飞扬",
    logo: "https://blog.liushen.fun/info/avatar.ico",
    link: "https://blog.liushen.fun/"
  },
  {
    title: "Arthals' ink",
    logo: "https://cdn.arthals.ink/Arthals.png",
    link: "https://arthals.ink/"
  },
  {
    title: "微霞",
    logo: "https://cdn.yuuu.org/img/avatar.webp",
    link: "https://yuuu.org/"
  },
  {
    title: "Xuan's blog",
    logo: "https://blog.ybyq.wang/usr/themes/handsome/assets/img/avatar.png",
    link: "https://blog.ybyq.wang/"
  },
  {
    title: "Mofei",
    logo: "https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pieces/mofeiLogo.png",
    link: "https://www.mofei.life"
  },
  {
    title: "小不的窝",
    logo: "https://s2.loli.net/2025/01/26/Q6WYTHDfPR2bCyg.jpg",
    link: "https://blog.donotknow.top/"
  },
  {
    title: "THW's Blog",
    logo: "https://image.tianhw.top/avatar.webp",
    link: "https://blog.tianhw.top"
  }
]

const open = (link) => window.open(link, '_blank')

// 鼠标跟随光晕:把鼠标位置换算成卡片局部坐标写入 CSS 变量,radial-gradient 随之移动
let handler = null
let timer = null
const throttle = (fn, wait) => {
  return (e) => {
    if (timer) return
    timer = setTimeout(() => {
      timer = null
      fn(e)
    }, wait)
  }
}

onMounted(() => {
  const cards = Array.from(document.querySelectorAll('.fl-card'))
  handler = throttle((e) => {
    cards.forEach((card) => {
      const x = Math.floor(e.pageX - card.offsetLeft)
      const y = Math.floor(e.pageY - card.offsetTop)
      card.style.setProperty('--x', `${x}px`)
      card.style.setProperty('--y', `${y}px`)
    })
  }, 50)
  window.addEventListener('mousemove', handler)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handler)
})
</script>

<style scoped>
.friend-links-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
}
@media (min-width: 768px) {
  .friend-links-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
.fl-card {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(200, 200, 200, 0.32);
  border-radius: 8px;
}
.fl-card__bg {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: #ffffff;
  z-index: -1;
  transition: background 0.45s ease;
}
.fl-card:hover .fl-card__bg {
  background: #f4f5f5;
}
.fl-card::before {
  content: '';
  position: absolute;
  left: -1px;
  right: -1px;
  top: -1px;
  bottom: -1px;
  border-radius: 8px;
  transition: background 1s ease;
  user-select: none;
  will-change: background;
  z-index: -2;
  background: radial-gradient(200px circle at var(--x, -200px) var(--y, -200px), #f87171 0, #5d67e8 50%, transparent 100%);
}
.fl-card__logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 8px;
  flex-shrink: 0;
}
.fl-card__logo img {
  width: 100%;
  height: 100%;
}
.fl-card__title {
  flex: 1;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 暗色适配(颜色值取自 @vuepress-reco/tailwindcss-config custom-colors.js) */
.dark .fl-card {
  border-color: rgba(82, 82, 89, 0.32);
}
.dark .fl-card__bg {
  background: #161617;
}
.dark .fl-card:hover .fl-card__bg {
  background: #27272a;
}
</style>
