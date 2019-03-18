<template>
    <ul>
        <li>
            <img src="../assets/logo.png"/>
            <p class="p1">123</p>
            <p class="p2">123456</p>
        </li>
        <li @click="toDetail(index)" v-for="(hotGoods,index) in hotGoodsList" :key="index">
            <img v-lazy="hotGoods.deal_pic"/>
            <p class="p1" v-text="hotGoods.title"></p>
            <p class="p2" v-text="hotGoods.rebate_view"></p>
        </li>

        <loading v-show="showLoading"></loading>

    </ul>
</template>
<script>
import loading from "./loading.vue";
export default {
    components: {
        loading,
    },
    data(){
        return{
            hotGoodsList:[],
            showLoading: false
        }
    },
    methods:{
        async getGoodslist(){
            // console.log(this)
            await this.$store.commit("setLoadingIsShow", true);
            let hotGoodsList = await this.$axios.get(
                "http://localhost:3000/findgoods",
                {
                params:
                    {
                        page:1, 
                        find:{},
                        qty:''
                    } 
                }
            )
            // console.log(hotGoodsList.data)
            this.hotGoodsList = hotGoodsList.data
            await this.$store.commit("setLoadingIsShow", false);
        },
        //把数据存进vuex
        toDetail(index){
            let hotGoods = this.hotGoodsList[index];
            // console.log(hotGoods)
            this.$store.commit("setHotGoods", hotGoods);
            this.$router.push({ path: "ldetail" });    
        }
    },
    mounted() {
        this.getGoodslist();
   }

}
</script>
<style scoped>
ul{
    width:100%;
    white-space:nowrap;
    padding-left:5px;
    overflow-y:hidden;
    overflow-x:scroll;
    height:225px;
}
li{
    white-space:normal;
    display:inline-block;
    width:137px;
    margin-left:10px;
}
    img{
        width:137px;
        height:137px;
    }
    .p1{
    margin-top: 8px;
    width: 100%;
    height: 40px;
    color: #454553;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
     margin-bottom:0rem;
    }
    .p2{
        margin-top: 5px;
        font-size: 14px;
        color: #FF804D;
        font-weight: 500;
        width: 100%;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>