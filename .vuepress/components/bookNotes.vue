<style scoped lang="scss">
  .bookshelf_preview_container{
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    .bookshelf_preview_items:hover{
      transition: all .2s ease-in-out;
      transform: scale(1.1);
    }
    .bookshelf_preview_items{
      cursor: pointer;
      width: 23.5%;
      height: 169px;
      position: relative;
      overflow: hidden;
      background-color: #515152;
      border-radius: 12px;
      margin-bottom: 1.5%;
      margin-right: 2%;
      .bookshelf_preview_item{
        display: table;
        padding: 24px;
        box-sizing: border-box;
        .bookshelf_preview_item_bookimg{
          display: table-cell;
          text-align: left;
          vertical-align: middle;
          width: 84px;
          height: 121px;
          img{
            vertical-align: top;
            width: 100%;
            height: 100%;
            background-color: #d8d8d8;
            object-fit: cover;
          }
        }
        .bookshelf_preview_content{
          padding: 0 0 0 24px;
          display: table-cell;
          vertical-align: middle;
          .bookshelf_preview_title{
            font-size: 16px;
            color: #eef0f4;
            line-height: 24px;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            -webkit-text-size-adjust: none;
            height: auto;
            max-height: 48px;
            word-break: break-all;
            overflow: hidden;
          }
          .bookshelf_preview_author{
            position: relative;
            display: inline-block !important;
            margin-top: 8px;
            font-size: 14px;
            vertical-align: bottom;
            color: #8a8c90;
            line-height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            -webkit-text-size-adjust: none;
            box-orient: vertical;
            max-height: 22px;
          }
        }
      }
    }
    .bookshelf_preview_items:nth-child(4n){
      margin-right: 0;
    }
  }
</style>

<template>
  <div class="bookshelf_preview_container">
    <div 
      class="bookshelf_preview_items" 
      v-for="item in books[bookType]" 
      :key="item.url" 
      :title="item.name"
      :style="{ 'width': isMobile?'100%':''}"
    >
      <a href="#"></a>
      <div class="bookshelf_preview_item">
        <div class="bookshelf_preview_item_bookimg">
          <img :src="item.url" alt="书籍封面">
        </div>
        <div class="bookshelf_preview_content">
          <p class="bookshelf_preview_title" >{{item.name}}</p>
          <span class="bookshelf_preview_author" :title="item.author">{{item.author}}</span>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { books } from '../utils/enum'
export default {
  name: "bookNotes",
  data(){
    return{
      books,
      isMobile:false
    }
  },
  props:['bookType'],
  mounted(){
    this.getScreen()
  },     
  methods:{
    getScreen() {
      if (
        navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
}
</script>
