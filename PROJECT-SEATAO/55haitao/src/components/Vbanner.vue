<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="black">
            <!-- <van-swipe-item>1</van-swipe-item>
            <van-swipe-item><img class="d-block w-100" src="https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/24/1b02f602c2e4768d2b804ad3ecdfe7bd.jpg" alt="First slide"></van-swipe-item>
            <van-swipe-item><img class="d-block w-100" src="https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/22/4ab34e58e267ad0972b36a907a3d6711.jpg" alt="Third slide"></van-swipe-item>
            <van-swipe-item><img class="d-block w-100" src="https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/24/1b02f602c2e4768d2b804ad3ecdfe7bd.jpg" alt="First slide"></van-swipe-item>    
            <van-swipe-item><img class="d-block w-100" src="https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/22/4ab34e58e267ad0972b36a907a3d6711.jpg" alt="Third slide"></van-swipe-item>
            <van-swipe-item><img class="d-block w-100" src="https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/24/1b02f602c2e4768d2b804ad3ecdfe7bd.jpg" alt="First slide"></van-swipe-item> -->
            <van-swipe-item v-for="(image,index) in  images" :key="index">
                <!-- <img style="height:200px" v-lazy="image" /> -->
                <img :style="{height:height+'px'}" v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import Vue from 'vue'

// 方式二. 按需引入组件
// 在不使用插件的情况下，可以手动引入需要的组件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import 'vant/lib/index.css';

// 方式三. 导入所有组件
// import Vant from 'vant';
// Vue.use(Vant);
// import 'vant/lib/index.css';

export default {
    props: {
        images: {
        type: Array,
        default:()=>[]
        },
        height:{
        type: Number,
        default:100
        }
   },
   mounted(){
    // console.log(this.images,this.height)
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
