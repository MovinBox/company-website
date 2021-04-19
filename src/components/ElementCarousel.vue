<template>
  <!-- 这个不用，轮播图 -->
  <div class="block">
    <span class="demonstration">Click 指示器触发</span>
    <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
  .block{
    width: 400px;
    height: 200px;
  }
  .el-carousel__indicator .el-carousel__indicator--horizontal{
    float: left;
    background-color: #475669;
    width: 20px;
    height: 5px;
  }
  /* .el-carousel{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item{
    width: 100%;
    height: 100%;
  } */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>