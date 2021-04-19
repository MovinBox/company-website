<template>
  <!-- COMPANY PROFILE 公司简介 -->
  <div class="compony-profile">
    <ul>
      <li>
        <h1>COMPANY PROFILE</h1>
        <h2>公司简介</h2>
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </li>
      <li>
        <img src="../assets/banner.jpeg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      
    }
  }
}
</script>

<style>
.compony-profile{
  width: 1200px;
  height: 510px;
  margin: 0 auto;
  padding: 140px 0 180px;
}
.compony-profile ul{
  width: 100%;
  text-align: left;
}
.compony-profile ul li h1{
  margin-bottom: 30px;
}
.compony-profile ul li h2{
  margin-bottom: 60px;
}
.compony-profile ul li div{
  font-size: 14px;
  line-height: 30px;
}
.compony-profile ul li:nth-of-type(1){
  width: 560px;
  float: left;
}
.compony-profile ul li:nth-of-type(2){
  width: 497px;
  height: 512px;
  background-color: #ccc;
  float: right;
  overflow: hidden;
}
.compony-profile ul li img{
  height: 100%;
}
</style>
