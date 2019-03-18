import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//一级页面
import Search from '../pages/Search.vue'
import Login from '../pages/Login.vue'

//二级页面
// import Lbbs from '../pages/Lheader/Lbbs.vue'
// import Ldiscounts from '../pages/Lheader/Ldiscounts.vue'
// import Lstore from '../pages/Lheader/Lstore.vue'
import Ldetail from '../pages/Lheader/Ldetail.vue'
//路由懒加载
const Lstore = () => import('../pages/Lheader/Lstore.vue');
const Lbbs = () => import('../pages/Lheader/Lbbs.vue');
const Ldiscounts = () => import('../pages/Lheader/Ldiscounts.vue');


//组件
import Lheader from '../components/Lheader.vue'

// 配置路由
const routes = [
    {
        path: '/',
        redirect: {
           name: 'ldiscounts'
        }
    },{
        path: '/index',
        // 路由命名，方便跳转
        name: 'index',
        component:Lheader,
        children: [
            {
                // 嵌套路由里面的path要删掉/
                path: 'ldiscounts',
                name: 'ldiscounts',
                component: Ldiscounts
            }, {
                path: 'lstore/:num',
                name: 'lstore',
                component: Lstore
            },
            {
                path: 'lbbs',
                name: 'lbbs',
                component: Lbbs
            },
            {
                path: 'ldetail',
                name: 'ldetail',
                component: Ldetail
            },
        ]
    },{
        path: '/search',
        name: 'search',
        component: Search,
    },{ 
        path: '/search', 
        component: Search,
        //别名
        alias: '/f' },
    {
        path: '/login',
        name: 'login',
        component: Login,
        // children: [
        //     {
        //         path: 'phone',
        //         name: 'phone',
        //         component: phone
        //     }, {
        //         path: 'uidlogin',
        //         name: 'uidlogin',
        //         component: uidlogin
        //     }
        // ]
    }
]
//实例该路由配置
const router = new VueRouter({
    routes,
})

export default router;