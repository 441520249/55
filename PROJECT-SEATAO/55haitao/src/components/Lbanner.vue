<template>
    <!-- 请务必在.carousel可选控件上设置唯一ID ，尤其是在单个页面上使用多个轮播时。 -->
    <!-- data-interval="500"  -->
   <div id="carouselExampleIndicators" class="carousel slide" data-interval="10000" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner ">
    <!-- active类需要被添加到幻灯片之一。否则，旋转木马将不可见。 -->
    <div class="carousel-item active">
        <img class="d-block w-100" src="https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/24/1b02f602c2e4768d2b804ad3ecdfe7bd.jpg" alt="First slide">
        <div class="carousel-caption  d-md-block">
            <h5 style="color:#00f">1</h5>
            <p style="color:#00f">第一页</p>
        </div>
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/24/5b364ef8e2128b78816d029c51ad3ecf.jpg" alt="Second slide">
        <div class="carousel-caption  d-md-block">
            <h5 style="color:#0f0">2</h5>
            <p style="color:#0f0">第二页</p>
        </div>
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="https://cdn.55haitao.com/bbs/data/attachment/banner/2019/01/22/4ab34e58e267ad0972b36a907a3d6711.jpg" alt="Third slide">
        <div class="carousel-caption  d-md-block">
            <h5 style="color:#ff0">3</h5>
            <p style="color:#ff0">第三页</p>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>

import "bootstrap";
// import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
export default {
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
