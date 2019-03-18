# store
```js
//触发预览图的commit执行mutation的editGallery
actions:{
    setGallery(context,obj){
        context.commit('editGallery', obj)
    }
}
//真正修改state的值
mutations: { 
    editGallery(state, obj) {
        console.log(obj)
        state.galleryImgUrl = obj.galleryImgUrl
        state.galleryStatus = obj.galleryStatus
    },
},
state: {
        //图片的地址
        galleryImgUrl: "",
        //预览图组件的状态值
        galleryStatus: false,
    },
```
# Xgallery.vue
```js
//galleryStatus为true显示为false隐藏
:style="{'display':galleryStatus? 'block':'none'}"
//计算得到galleryImgUrl与galleryStatus
computed:{
    galleryImgUrl(){
        return this.$store.getters.getGallery.galleryImgUrl
    },
    galleryStatus(){
        return this.$store.getters.getGallery.galleryStatus
    }
}
```
# LlatestDiscount.vue
```html
//点击事件传图片路径
 <div @click="showGallery(hotGoods.store_logo)" class="lbox">
    <img v-lazy="hotGoods.store_logo">
</div>
```
```js
// showGallery函数执行actions的setGallery触发commit
methods:{
    // 显示预览图
    showGallery(imgUrl) {
        this.$store.dispatch("setGallery", {
            // 图片
            galleryImgUrl: imgUrl,
            // 状态值
            galleryStatus: true
        });
    }
}
```
# Xgallery.vue
```html
<div @click="hideGallery" class="weui-gallery__opr">
```    
```js
methods: {
    hideGallery() {
        this.$store.dispatch("setGallery", {  
            galleryImgUrl: '',
            galleryStatus: false
        });
    }
},
```