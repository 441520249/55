<template>
  <div>
    ldiscounts
    <Lbanner></Lbanner>
    <div style="width:100px height:100px; padding-left:50px;">
      <Vbanner :images="images" :height="height"/>
    </div> 
    <Vtitle title="热门优惠" imgurl="https://m.55haitao.com/_nuxt/img/8edb042.svg"></Vtitle>
    <LhotOffer></LhotOffer>
     <div class="bian"></div>
    <Vtitle title="最新优惠" imgurl="https://m.55haitao.com/_nuxt/img/d956587.svg"></Vtitle>
    <LlatestDiscount></LlatestDiscount>
    <Xgallery />
</div>
</template>
<script>
import Lbanner from '../../components/Lbanner.vue'
import Vbanner from '../../components/Vbanner.vue'
import Vtitle from '../../components/Vtitle.vue'
import LhotOffer from '../../components/LhotOffer.vue'
import LlatestDiscount from '../../components/LlatestDiscount.vue'
import Xgallery from '../../components/Xgallery.vue'

export default {
   components: {
    Lbanner,
    Vbanner,
    Vtitle,
    LhotOffer,
    LlatestDiscount,
    Xgallery,
  },
  data(){
    return {
      images:[
        "https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/24/1b02f602c2e4768d2b804ad3ecdfe7bd.jpg",
        "https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/22/4ab34e58e267ad0972b36a907a3d6711.jpg",
        "https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/24/1b02f602c2e4768d2b804ad3ecdfe7bd.jpg",
        "https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/22/4ab34e58e267ad0972b36a907a3d6711.jpg"
        ],
      height:100
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bian{
    height:10px;
    background-color:rgb(245, 245, 245);
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 48px;
  background: #fff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box {
  width: 100%;
  height: 48px;
}
div {
  word-break: break-word;
}
img {
  display: block;
  font-size: 12px;
}
a {
  color: #000;
}
.actived {
  color: rgb(255, 128, 77);
}
</style>
