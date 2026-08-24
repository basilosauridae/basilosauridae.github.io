<template>
  <div class="flf-wrap">
    <div class="flf-box">
      <div class="flf-header">
        <span class="flf-title">📝 友链申请格式</span>
        <button class="flf-btn" :class="{ copied: copied === 'apply' }" @click="copy('apply', applyFormat)">
          {{ copied === 'apply' ? '已复制 ✓' : '复制' }}
        </button>
      </div>
      <pre class="flf-code">{{ applyFormat }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'FriendLinkFormat' })

// 申请格式:访客复制后填入自己站点的信息,在留言板提交
const applyFormat = `{
  title: "",
  logo: "",
  link: ""
},`

const copied = ref('')

const copy = async (key, text) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // 非安全上下文(如 http)下的兜底方案
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copied.value = key
  setTimeout(() => (copied.value = ''), 2000)
}
</script>

<style scoped>
.flf-wrap {
  display: grid;
  gap: 16px;
  margin: 16px 0;
}
.flf-box {
  border: 1px solid mediumpurple;
  border-radius: 8px;
  overflow: hidden;
}
.flf-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: mediumpurple;
}
.flf-title {
  color: #fff;
  font-weight: 600;
}
.flf-btn {
  border: 1px solid rgba(200, 200, 200, 0.32);
  border-radius: 6px;
  background: #ffffff;
  padding: 2px 12px;
  font-size: 13px;
  line-height: 1.8;
  cursor: pointer;
  transition: background 0.3s ease;
}
.flf-btn:hover {
  background: #f4f5f5;
}
.flf-btn.copied {
  color: mediumpurple;
  border-color: mediumpurple;
}
.flf-code {
  margin: 0;
  padding: 12px 16px;
  background: #f9fafb;
  font-size: 14px;
  line-height: 1.8;
  overflow-x: auto;
}
/* 暗色适配(色值取自 reco 主题 custom-colors.js) */
.dark .flf-box {
  border-color: rgba(82, 82, 89, 0.32);
}
.dark .flf-header {
  background: #27272a;
}
.dark .flf-btn {
  background: #161617;
  border-color: rgba(82, 82, 89, 0.32);
  color: rgb(226, 232, 240);
}
.dark .flf-btn:hover {
  background: #27272a;
}
.dark .flf-code {
  background: #202022;
}
</style>
