<template>
  <div>
    <div class="wt">
      <img :src="imgurl" />
      <h3 class="wt__title wt__title--icon-title" v-text="title+author"></h3>
      <router-link to="/index/moreshop" href="/store/double-rebate" class="wt__more" v-text="hasMore?'查看更多':''"></router-link>  
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props:[
    'title',
    'hasMore',
    'imgurl'
  ],
  computed:{
      // author() {
      //   // return this.$store.state.author;//直接拿
      //   return this.$store.getters.getAuthor;//通过getters拿
      // },

      // ...mapState({
      //     author: state => state.author,
      // })

      // ...mapState({
      //     author: function(state){
      //        return state.author
      //     }
      // })

      ...mapState(['author'])
},
    beforeCreate() {
    // 来自于vuex仓库
    console.log(this.$store.state.author)
    console.log(this.$store.getters.getAuthor);
  },
};
</script>
<style scoped>

.wt {
  padding: 15px 16px 0;
}
img{
  display: inline-block;
  margin-right: 5px;
}
.wt .wt__title {
  display: inline-block;
  width: 60%;
  color: #454553;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}
.wt .wt__more {
 float: right;
  color: #ff804d;
  font-size: 14px;
  line-height: 1.7;
}
</style>
