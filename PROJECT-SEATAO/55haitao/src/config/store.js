import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        author:"leslie",
        //Ldetail的数据
        curGoods: {}, 
        //loading的显示状态
        loadingIsShow: false,

        //图片的地址
        galleryImgUrl: "",
        //预览图组件的状态值
        galleryStatus: false,
    },
    mutations: {
        setHotGoods(state, newGoods) {
            state.curGoods = newGoods;
        },
        setLoadingIsShow(state, bool) {
            state.loadingIsShow = bool;
        }, 
        editGallery(state, obj) {
            // console.log(obj)
            state.galleryImgUrl = obj.galleryImgUrl
            state.galleryStatus = obj.galleryStatus
        },
    },
    getters: {
        getCurGoods(state) {
            return state.curGoods;
        },
        getLoadingIsShow(state) {
            return state.loadingIsShow;
        },
        getGallery(state) {
            return {
                galleryImgUrl: state.galleryImgUrl,
                galleryStatus: state.galleryStatus
            }
        },
        getAuthor(state) {
            return state.author;
        },
    },
    //触发预览图的commit
    actions:{
        setGallery(context,obj){
            context.commit('editGallery', obj)
        }
    }
})
export default store;