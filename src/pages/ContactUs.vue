<template>
  <div id="">
    <Title/><!-- 导航 -->
    <Banner/><!-- Banner -->
    <Contact/><!-- 联系 -->
    <div class="contact-us">
      <div>
        <div>
          <h1>CONTACT INFORMATION</h1>
          <h2>联系方式</h2>
          <div><p>联系电话</p>：<span>123</span></div>
          <div><p>手机号码</p>：<span>123</span></div>
          <div><p>传真</p>：<span>123</span></div>
          <div><p>邮箱</p>：<span>123</span></div>
          <div><p>联系QQ</p>：<span>123</span></div>
          <div><p>联系地址</p>：<span>123</span></div>
        </div>
        <div><BaiduMap/></div>
      </div>
    </div>
    <Bottom/><!-- 底部 -->
  </div>
</template>

<script>
import Title from '../components/Title'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import BaiduMap from '../components/BaiduMap'
import Bottom from '../components/Bottom'

export default {
  name: 'AboutUs',
  components: {
    Title,
    Banner,
    Contact,
    BaiduMap,
    Bottom,
  }
}
</script>

<style scoped>
.contact-us{
  width: 100%;
  height: 637px;
  background: #FAFAFA;
}
.contact-us > div{
  width: 1200px;
  margin: auto;
  height: 100%;
}
.contact-us > div > div:nth-of-type(1){
  width: 435px;
  height: 100%;
  float: left;
  margin-left: 50px;
  text-align: left;
}
.contact-us > div > div:nth-of-type(1) h1{
  margin: 110px 0 28px;
}
.contact-us > div > div:nth-of-type(1) h2{
  margin-bottom: 50px;
}
.contact-us > div > div:nth-of-type(1) div{
  font-size: 16px;
  line-height: 46px;
}
.contact-us > div > div:nth-of-type(1) p{
  width: 65px;
  float: left;
  text-align: justify;
  text-align-last: justify;
}
.contact-us > div > div:nth-of-type(2){
  width: 645px;
  height: 460px;
  margin-top: 85px;
  margin-right: 50px;
  float: right;
}
</style>
