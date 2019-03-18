<template>
  <div>
    Lstort 
    <p>{{ $route.params.num }}</p>
    <p v-text="msg">Vbanner图片是用 <br /> &lt;Vbanner :images="images" :height="height"/&gt;</p>
    <Vbanner :images="images" :height="height"/>
  
    <ul class="country-list__ul">
      <li v-for='(country,index) in countrys' :key='index' class="country-list__li">
       <img class="country" 
       :src="'https://appv6.55haitao.com/static/images/areas_flags_store_index/'+country.eng+'@2x.png?v=default_201811261'"
       :alt="country.name"
       >
      <div class="country-list__name" v-text="country.name">123</div>
      </li>
    </ul>

    <div class="bian"></div>

    <div class="category">
      <a class="category__li category__li--to-china">
        <div class="category__wrap">
          <img src="">
          <h2 class="category__title">直邮中国</h2>
          <span class="category__desc">免转运购买方便</span>
        </div>
      </a>
      <a class="category__li category__li--to-china">
        <div class="category__wrap">
          <img src="">

          <h2 class="category__title">收藏的商家</h2>
          <span class="category__desc">0个</span>
        </div>
      </a>
      <a class="category__li category__li--to-china">
        <div class="category__wrap">
         <img src="">

          <h2 class="category__title">银联&支付宝</h2>
          <span class="category__desc">付款无需双币信用卡</span>
        </div>
      </a>
      <a class="category__li category__li--to-china">
        <div class="category__wrap">
         <img src="">
          <h2 class="category__title">全部商家</h2>
          <span class="category__desc">6000+</span>
        </div>
      </a>
    </div>

    <div class="bian"></div>
    <Vtitle title="今日加倍返利" hasMore=1 imgurl="https://m.55haitao.com/_nuxt/img/169887b.svg"></Vtitle>

    <LdoubleRebate></LdoubleRebate>

    <Vtitle title="热门商家" imgurl="https://m.55haitao.com/_nuxt/img/3c37441.svg"></Vtitle>
    
  </div>
</template>

<script>
import Vbanner from '../../components/Vbanner.vue'
import Vtitle from '../../components/Vtitle.vue'
import LdoubleRebate from '../../components/LdoubleRebate.vue'



export default {
  components: {
    Vbanner,
    Vtitle,
    LdoubleRebate,

  },
  data(){
    return {
      images:[
        "https://cdn.55haitao.com/bbs/data/attachment/banner/2019/02/14/8ef750eb0a7a413534233e539d43d9d1.jpg",
        "https://cdn.55haitao.com/bbs/data/attachment/banner/2019/02/15/3b2e135ec2e8886aa68e584d8dc83238.jpg",
        "https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/24/1b02f602c2e4768d2b804ad3ecdfe7bd.jpg",
        "https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/22/4ab34e58e267ad0972b36a907a3d6711.jpg"
        ],
      height:100,
      msg:  ' Vbanner图片是用 <Vbanner:images="images" :height="height"/> ',
       countrys: [
        {
          name: "中国",
          eng: "CHN"
        },
        {
          name: "美国",
          eng: "USA"
        },
        {
          name: "英国",
          eng: "GBR"
        },
        {
          name: "德国",
          eng: "DEU"
        },
        {
          name: "日本",
          eng: "JPN"
        },
        {
          name: "韩国",
          eng: "KOR"
        },
        {
          name: "澳大利亚",
          eng: "AUS"
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bian {
  height: 10px;
  background-color: rgb(245, 245, 245);
}
.banner {
  width: 100%;
}
.country-list__ul {
  width: 100%;
  height: 87px;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-bottom: 0;
}
.country-list__li {
  height: 87px;
  white-space: normal;
  display: inline-block;
  padding: 14px 8px;
}
.country{
    height: 36px;
    width: 36px;
}
.country-list__img {
  display: block;
  margin: 0 auto 8px;
  height: 36px;
  width: 36px;
}
.country-list__name {
  width: 50px;
  color: #4f4f53;
  font-size: 12px;
  line-height: 1.333;
  text-align: center;
}
.category {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 110px;
}
.category__li {
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  height: 55px;
  padding: 12px 0 12px 10px;
}
.category__li img {
  float: left;
  margin-right: 10px;
}
.category__li .category__title {
  color: #454553;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}
.category__li .category__desc {
  color: #78787d;
  font-size: 12px;
}
</style>
