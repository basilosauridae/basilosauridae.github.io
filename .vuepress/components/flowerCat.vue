<style scoped lang="scss">
.container{
  cursor: pointer;
  transform: scale(0.98);
  span{
    font-size: 20px;
    font-weight: 700;
    display: inline-block;
    padding: 5px;
  }
}
.top_item{
  display: flex;
  align-items: center;
  .top_item_left{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    overflow: hidden;
    margin-right: 10px;
  }
  .top_item_right{
    .text1{
      color: #ff6347;
    }
    .text2{
      color: #00d6ec;
    }
  }
  .text3{
    color: #f8b317;
  }
}
.center_item{
  margin-left: 60px;
}
.bottom_item{
  margin-left: 65px;
  div{
    padding: 10px 0;
  }
}
</style>

<template>
  <div class="bannertop container">
    <div class="top_item">
      <div class="top_item_left">
        <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/cat/avator.png" alt="花花头像">
      </div>
      <div class="top_item_right">
        一只出生于
        <span class="text1">初夏</span>的
        <span class="text2">巨蟹座</span>的
        <span class="text3">橘猫</span>。
        <b style="font-size:12px">花花是一只猫，此篇以第一人称讲述;此篇博文实际是花花口述 略懂喵语的影大宝记录。</b>
      </div>
    </div>
    <div class="center_item">
      <span>{{ageInfo.age}}</span>岁<span>{{ageInfo.months}}</span>个月,
      相当于人类<span>{{ageInfo.personAge}}</span>岁
      (<i>参考：日本京都中央动物医院提供的“猫の计算式”</i>)
    </div>
    <div class="bottom_item">
      <div>
        喜爱食物：<span>虾</span>🦐，<span>猫粮和罐头</span>🍚，<span>榴莲</span>🥟，<span>甜食</span>如蜜瓜、水果玉米🌽等
      </div>
      <div>
        生活乐趣：和<span>影大宝</span>😎玩耍，被<span>梳毛</span>🛀，看<span>动画片</span>🤡
      </div>
      <div>
        脾气秉性：傲娇<span>礼貌</span>🎩，谨慎<span>机敏</span>🤠，<span>好吃</span>心宽♥，好奇<span>宝宝</span>👶
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flowerCat",
  data(){
    return{
      ageInfo:{
        age:0,
        month:0,
        personAge:0
      },
    }
  },
  computed:{
    ageInfo(){
      // 解析出生日期字符串为Date对象
      // const birthDate = new Date('2021-6-22');//IOS5以上版本（不包含IOS5）中的Safari无法解析此写法
      const birthDate = new Date('2021-6-22'.replace(/-/g,'/'));
      const currentDate = new Date(); // 当前日期和时间

      // 计算年龄和月份
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      let months = currentDate.getMonth() - birthDate.getMonth();
      let personAge

      // 如果月份为负数，表示当前月份小于出生月份，需要调整年份并重新计算月份
      if (months < 0) {
        age--;
        months += 12;
      }

      if(age<2){
        personAge = 7 * age
      }else {
        personAge = 24 + (age - 2) * 4
      }
      return { age, months, personAge };
    }
  }
}
</script>
