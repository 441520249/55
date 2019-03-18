<template>
  <div>
    <ul>
      <li class="box" >
        <div class="lbox">
          <img class="news" src="../assets/logo.png" >
        </div>
        <div class="merchant-li__content">
          <p class="merchant-li__title" >1</p>
          <p class="merchant-li__rebate" >2</p>
          <p>3</p>
        </div>
      </li>
      <li v-for="(hotGoods,index) in hotGoodsList" :key="index" class="box" >
        <div class="lbox">
          <img class="news" v-lazy="hotGoods.store_logo">
        </div>
        <div class="merchant-li__content">
          <p class="merchant-li__title" v-text="hotGoods.store_name">1</p>
          <p class="merchant-li__rebate" v-text="hotGoods.rebate_view">2</p>
          <p  class="merchant-li__info"
            v-text="hotGoods.store_id+' · '+hotGoods.rebate_view">3</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    data(){
      return {
            hotGoodsList:[]        
      }
    },
    methods:{
       async getGoodslist(){
         let hotGoodsList = await this.$axios.get(
           "http://localhost:3000/findgoods",
           {
             params:{
                page:0, 
                find:{},
                qty:2
             }
           }
         )
        //  console.log(hotGoodsList.data)
         this.hotGoodsList = hotGoodsList.data
       }
    },
    mounted() {
        this.getGoodslist();
   }
};
</script>
<style scoped>
.wrapper {
  height: 400px;
}
.box {
  height: 82px;
  padding: 16px;
  display: flex;
}
.lbox {
  width: 70px;
  height: 70px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
}
.lbox .news {
  width: 54px;
  height: 54px;
}
.merchant-li__content {
  height: 54px;
}
.merchant-li__content p {
  margin: 3px;
  font-size: 6px;
}
.merchant-li__content .merchant-li__title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.merchant-li__content .merchant-li__rebate {
  color: #ff804d;
  height: 19px;
}
.merchant-li__content .merchant-li__info {
  color: #999;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>