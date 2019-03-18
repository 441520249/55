import Vue from 'vue'
import App from './App.vue'

import router from './config/router.js'
import store from './config/store.js'

//全局样式
import "./style/common.css"

//axios模块
import axios from 'axios';
Vue.prototype.$axios = axios;


//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
