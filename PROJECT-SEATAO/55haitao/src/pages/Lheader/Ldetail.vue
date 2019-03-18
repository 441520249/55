<template>
  <div>
  detail
  <div id="detail" class="wrapper">
      <div class="content">
           <img :src="curGoods.deal_pic">
          <div class="deal-detail__info">
              <h3 class="deal-detail__title" v-text="curGoods.title">1</h3>
                <h4 class="deal-detail__rebate-view">{{curGoods.price_view}} <span v-text="curGoods.rebate_view"></span></h4>
              <p class="deal-detail__note">{{curGoods.store_name}} · {{curGoods.publish_time}}</p>
              <div class="deal-detail__border"></div>
          </div>
          <div class="bian"></div>
      </div>
  </div>
    <button type="button" id="buyBtn" class="btn btn-warning btn-lg btn-block">去购买</button>
</div>

</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      curGoods: {},
    };
  },
  methods:{
     getCurGoods() {
      // console.log(this.$store.getters.getCurGoods)
      this.curGoods = this.$store.getters.getCurGoods;
      // console.log(this.curGoods);
    },
  },
  mounted(){
    this.getCurGoods();
  }




}
</script>
<style scoped>
.wrapper {
  height: 400px;
}
#buyBtn {
  position: fixed;
  bottom: 0px;
  color: #fff;
}
#detail {
  padding-bottom: 50px;
}
.bian {
  height: 10px;
  background-color: rgb(245, 245, 245);
}
img {
  width: 100%;
}
.deal-detail__info {
  padding: 10px;
  padding-bottom: 10px;
  margin-bottom: 8px;
}
.deal-detail__title {
  color: #1d1d1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}
.deal-detail__rebate-view {
  margin-top: 10px;
  color: #ff804d;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.333;
  vertical-align: top;
}
.deal-detail__rebate-view span {
  margin-left: 10px;
  display: inline-block;
  padding: 5px 6px;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1;
  background: #ff804d;
}
.deal-detail__note {
  margin: 12px 0 10px;
  font-size: 12px;
  color: #78787d;
}
.deal-detail__label-wrap {
  border-top: 1px solid #ccc;
  display: flex;
  padding-top: 10px;
  width: 100%;
}
.deal-detail__label-wrap .gou {
  width: 16px;
  height: 16px;
}
.deal-detail__label-wrap .deal-detail__label {
  font-size: 12px;
  line-height: 1.5;
}
</style>