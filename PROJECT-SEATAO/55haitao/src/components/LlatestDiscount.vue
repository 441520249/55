<template>
  <div>
    <ul class="box">
      <li v-for="(hotGoods,index) in hotGoodsList" :key="index" class="xbox">
        <!-- 编程式导航 -->
        <div @click="showGallery(hotGoods.store_logo)" class="lbox">
          <img v-lazy="hotGoods.store_logo">
        </div>
        <div class="rbox">
          <div class="p1">
                <img v-lazy="hotGoods.country_flag_pic">
            <span  v-text="hotGoods.store_name" class="shopname">1</span>
            <span v-text="hotGoods.rebate_view" class="tip">2</span>
          </div>
          <p class="p2"></p>
          <h3></h3>
          <p class="p3">
             <img src="../assets/logo.png">         
            <span v-text="hotGoods.comment_count" class="span">3</span>
             <img src="../assets/logo.png">
            <span v-text="hotGoods.praise_count" class="span">4</span>
            <span v-text="hotGoods.publish_time" class="span">5</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
   data(){
        return{
            hotGoodsList:[],
            currentPage: 0
        }
    },
    methods:{
        async getGoodslist(){
            // console.log(this)
            let hotGoodsList = await this.$axios.get(
                "http://localhost:3000/findgoods",
                {
                params:
                    {
                        page: this.currentPage, 
                        find:{},
                        qty:2
                    } 
                }
            )
            // console.log(hotGoodsList.data)
            // this.hotGoodsList = hotGoodsList.data
            this.hotGoodsList = this.hotGoodsList.concat(hotGoodsList.data);
            this.currentPage++;
        },
        scrollEvent() {
          window.onscroll = () => {
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop =
              document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
            var windowHeight =
              document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
            var scrollHeight =
              document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
            let target = parseInt((scrollHeight - windowHeight) * 1);
            scrollTop = parseInt(scrollTop);
            if (scrollTop === target) {
              this.getGoodslist();
            }
            // console.log(
            //   "距顶部" +
            //     scrollTop.toFixed(0) +
            //     "可视区高度" +
            //     windowHeight +
            //     "滚动条总高度" +
            //     scrollHeight +
            //     this.loading
            // );
          };
        },
       // 显示预览图
      showGallery(imgUrl) {
        this.$store.dispatch("setGallery", {
          // 图片
          galleryImgUrl: imgUrl,
          // 状态值
          galleryStatus: true
        });
      }
    },
    mounted() {
        this.getGoodslist();
        this.scrollEvent();
   }
}
</script>

<style scoped>
.box {
  display: block;
  width: 100%;
  height: 140px;
  padding: 16px;
}
.xbox {
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  height: 140px;
  padding: 0 16px;
}
.lbox {
  width: 108px;
  height: 108px;
  margin-right: 10px;
}
.lbox img {
  width: 108px;
  height: 108px;
  border-radius: 10px;
}
.rbox {
  width: 100%;
  position: relative;
}
.rbox .p1 {
  height: 10px;
}
.rbox img {
  width: 12px;
  height: 12px;
  margin-right: 6px;
  display: inline-block;
}
.rbox .shopname {
  font-size: 12px;
}
.rbox .tip {
  position: absolute;
  right: 0;
  top: 0;
  padding: 3px;
  line-height: 1;
  font-size: 10px;
  color: #fff;
  background: #ff804d;
  border-radius: 4px;
}
.rbox .p2 {
  width: 100%;
  margin-top: 6px;
  color: #1d1d1f;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0rem;
}
.rbox .p3 {
  margin-bottom: 0rem;
}
.rbox h3 {
  width: 100%;
  margin-top: 6px;
  color: #ff804d;
  height: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  margin: 0;
}
.span {
  font-size: 8px;
  color: #ccc;
  margin-right: 20px;
  
}
</style>

