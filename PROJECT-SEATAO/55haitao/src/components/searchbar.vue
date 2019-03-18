<template>
  <div>
    <div id="searchbar">
      <div class="searchbar">
        <div class="search_l">
          <img src="../assets/search.svg">
          <input />
        </div>
        <span class="search_r">取消</span>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
   
    };
  },
  methods: {

  }
};
</script>
<style scoped>
#searchbar {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
}
.empty {
  height: 56px;
}
.searchbar {
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
}
.search_l {
  flex: 7;
  position: relative;
}
img {
  position: absolute;
  left: 5px;
  top: 8px;
}
input {
  background-color: rgb(239, 239, 239);
  height: 36px;
  padding-left: 30px;
  border: 0;
  border-radius: 6px;
}
.search_r {
  flex: 1;
  text-align: right;
  line-height: 36px;
}
</style>

