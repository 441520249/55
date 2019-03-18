<template>
  <div id="loadingToast" style="opacity:1;" v-show="loadingIsShow">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">数据加载中</p>
    </div>
  </div>
</template>
<script>
import "weui";
export default {
  computed: {
    loadingIsShow() {
      return this.$store.getters.getLoadingIsShow;
    }
  }
};
</script>



