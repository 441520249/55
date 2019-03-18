<template>
  <div class="weui-gallery" 
    :style="{'display':galleryStatus? 'block':'none'}"
    >
        <span class="weui-gallery__img" 
        :style="{'backgroundImage': `url(${galleryImgUrl})`}"></span>
        <div @click="hideGallery" class="weui-gallery__opr">
            <a href="javascript:" class="weui-gallery__del">
                <i class="weui-icon-delete weui-icon_gallery-delete"></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
  computed:{
      galleryImgUrl(){
        return this.$store.getters.getGallery.galleryImgUrl
      },
      galleryStatus(){
        return this.$store.getters.getGallery.galleryStatus
      }
  },
  methods: {
    hideGallery() {
        this.$store.dispatch("setGallery", {  
          galleryImgUrl: '',
          galleryStatus: false
        });
      }
  },
}
</script>