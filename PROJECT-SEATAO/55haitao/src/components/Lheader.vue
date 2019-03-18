<template>
  <div>
    <div class="header">
        <router-link to="/index/ldiscounts" class="logo nuxt-link-exact-active nuxt-link-active">
            <img src="https://m.55haitao.com/_nuxt/img/ffab9fa.svg" alt="55海淘">
        </router-link>
         <router-link to="/index/ldiscounts" class="text_tab actived nuxt-link-active">
            优惠
        </router-link>
        <router-link to="/index/lstore/Lheader传过去的，路由传参" class="text_tab">
            商家
        </router-link>
        <!-- 编程式导航 -->
         <a @click="tobbs" class="text_tab">
            社区
        </a>
         <router-link to="/search">
        <div class="text_tab"><img src="https://m.55haitao.com/_nuxt/img/476a322.svg" alt="搜索">
        </div>
         </router-link>
            <router-link to="/login">
                <img src="https://m.55haitao.com/_nuxt/img/2f10504.svg" alt="个人中心">
            </router-link>
        </div>
    <div class="header--sitg"></div>
    <div class="box"></div>
        <router-view></router-view>
</div>
</template>

<script>
export default {
    // 编程式导航
     methods:{
        tobbs(){
            // 根据路径来进行跳转
            // this.$router.push('/index/lbbs')

            // 根据命名路由来进行跳转
            // this.$router.push({name:'lbbs'})

            //编程式导航传参
            const userId = '123'
            this.$router.push({ name: 'lbbs', params: { userId }}) // -> /lbbs/123
            //this.$router.push({ path: `/lbbs/${userId}` }) // -> /lbbs/123
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
