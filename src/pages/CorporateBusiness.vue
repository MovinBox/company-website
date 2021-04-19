<template>
  <div id="">
    <Title/><!-- 导航 -->
    <Banner/><!-- Banner -->
    <div class="corporate-business">
      <ul>
        <li v-for="item in list">
          <div><img :src="item.imgUrl" alt=""></div>          
          <div>
            <b>{{ item.ETitle }}</b>
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
            <button>了解详情</button>
          </div>
        </li>
      </ul>
    </div>
    <Bottom/><!-- 底部 -->
  </div>
</template>

<script>
import Title from '../components/Title'
import Banner from '../components/Banner'
import Bottom from '../components/Bottom'

export default {
  name: 'AboutUs',
  data (){
    return{
      list: [
        {
          title: '地产类金融服务',
          ETitle: 'REAL ESTATE CATEGORY',
          imgUrl: '../static/banner.jpeg',
          content: '公司主要为国内房地产开发企业提供金融服务，与国内外大型银行、信托等金融机构进行深度合作，并运用创新性的金融模式，服务于地产金融生态链。'
        },
        {
          title: '地产类金融服务',
          ETitle: 'REAL ESTATE CATEGORY',
          imgUrl: '../static/banner.jpeg',
          content: '公司主要为国内房地产开发企业提供金融服务，与国内外大型银行、信托等金融机构进行深度合作，并运用创新性的金融模式，服务于地产金融生态链。'
        },
        {
          title: '地产类金融服务',
          ETitle: 'REAL ESTATE CATEGORY',
          imgUrl: '../static/banner.jpeg',
          content: '公司主要为国内房地产开发企业提供金融服务，与国内外大型银行、信托等金融机构进行深度合作，并运用创新性的金融模式，服务于地产金融生态链。'
        },
      ]
    }
  },
  components: {
    Title,
    Banner,
    Bottom,
  }
}
</script>

<style scoped>
.corporate-business{
  width: 100%;
  overflow: hidden;
}
.corporate-business ul{
  width: 1200px;
  margin: 105px auto 150px;
}
.corporate-business ul li{
  width: 100%;
  height: 582px;
  margin-bottom: 115px;
  position: relative;
  text-align: left;
}
.corporate-business ul li div:nth-of-type(1){
  width: 870px;
  height: 100%;
  float: right;
}
.corporate-business ul li div:nth-of-type(1){
  width: 870px;
  height: 100%;
}
.corporate-business ul li div:nth-of-type(1) img{
  width: 870px;
  height: 100%;
  display: block;
}
.corporate-business ul li div:nth-of-type(2){
  width: 450px;
  height: 440px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  position: absolute;
  top: 84px;
}
.corporate-business ul li div > b{
  font-size: 26px;
  line-height: 26px;
  font-weight: bold;
  margin: 60px 60px 0 50px;
  display: block;
}
.corporate-business ul li div > h3{
  font-size: 24px;
  line-height: 24px;
  font-weight: normal;
  margin: 24px 60px 0 50px;
}
.corporate-business ul li div > p{
  font-size: 14px;
  line-height: 30px;
  margin: 32px 60px 0 50px;
  color: rgb(102, 102, 102);
}
.corporate-business ul li div > button{
  width: 128px;
  height: 43px;
  font-size: 14px;
  line-height: 43px;
  margin: 55px 60px 0 50px;
  color: #fff;
  background: #1e50ae;
  border: none;
  cursor: pointer;
}

.corporate-business ul li:nth-of-type(2n-1) div:nth-of-type(1){
  float: right;
}
.corporate-business ul li:nth-of-type(2n-1) div:nth-of-type(2){
  left: 20px;
}
.corporate-business ul li:nth-of-type(2n) div:nth-of-type(1){
  float: left;
}
.corporate-business ul li:nth-of-type(2n) div:nth-of-type(2){
  right: 20px;
}
</style>
