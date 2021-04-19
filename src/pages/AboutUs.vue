<template>
  <div>
    <Title/><!-- 导航 -->
    <Banner/><!-- Banner -->
    <ComponyProfile/><!-- 公司简介 -->
    <div class="development">
      <div>
        <h1>ENTERPRISE DEVELOPMENT</h1>
        <h2>企业发展</h2>
        <dl>
          <dd v-for="item in list">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
            <div></div>
          </dd>
        </dl>
      </div>
    </div>

    <div class="corporate-culture">
      <div>
        <h1>CORPORATE CULTURE</h1>
        <div>
          <h2>企业文化</h2>
          <span>在快速变化的市场中,坚守责任与初心。</span>
        </div>
        <div>
          <div>
            <b>愿景</b>
            <p>在快速变化的市场中,坚守责任与初心。在快速变化的市场中,坚守责任与初心。在快速变化的市场中,坚守责任与初心。</p>
          </div>
        </div>
      </div>
    </div>
    <Bottom/><!-- 底部 -->
  </div>
</template>

<script>
import Title from '../components/Title'
import Banner from '../components/Banner'
import ComponyProfile from '../components/ComponyProfile'
import Bottom from '../components/Bottom'

export default {
  name: 'AboutUs',
  components: {
    Title,
    Banner,
    ComponyProfile,
    Bottom,
  },
  data() {
    return{
      list: [
        {title: '杨帆',content: '2021年。。。。。'},
        {title: '杨帆',content: '2021年。。。。。'},
        {title: '杨帆',content: '2021年。。。。。'},
      ]
    }
  }
}
</script>

<style scoped>
.development{
  width: 100%;
  height: 600px;
  overflow: hidden;
  background-image: url(../assets/banner.png);
}
.development > div{
  width: 1200px;
  margin: auto;
  text-align: left;
}
.development > div > h1{
  color: #fff;
  margin: 140px 0 30px;
}
.development > div > h2{
  color: #fff;
  margin-bottom: 68px;
}
.development > div > dl{
  width: 100%;
  height: 140px;
  display: flex;
  border-bottom: 2px solid #ccc;
}
.development > div > dl > dd{
  flex: 1;
  padding-left: 100px;
  float: left;
  position: relative;
}
.development > div > dl > dd > h3{
  font-size: 28px;
  line-height: 45px;
  color: #fff;
}
.development > div > dl > dd > p{
  font-size: 16px;
  line-height: 26px;
  color: #fff;
}
.development > div > dl > dd > div{
  width: 10px;  
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  position: absolute;
  bottom: -5px;
  left: 110px;
}


.corporate-culture{
  width: 100%;
  height: 998px;
  background: rgba(247, 247, 247, 1);
}
.corporate-culture > div{
  width: 1200px;
  margin: auto;
  padding: 116px 0 0;
}
.corporate-culture > div h1{
  float: left;
  margin-bottom: 30px;
}
.corporate-culture > div > div{
  width: 100%;
  display: inline-block;
  margin-bottom: 84px;
  position: relative;
}
.corporate-culture > div > div > h2{
  float: left;
}
.corporate-culture > div > div > span{
  float: right;
  margin-top: 16px;
  font-size: 14px;
  color: rgb(153, 153, 153);
}
.corporate-culture > div > div:nth-last-of-type(1){
  width: 100%;
  height: 515px;
  background-image: url(../assets/banner.jpeg);
  overflow: hidden;
}
.corporate-culture > div > div > div{
  width: 293px;
  height: 126px;
  padding: 50px;
  background: rgba(255,255,255,0.8);
  position: absolute;
  top: 158px;
  left: 745px;
  text-align: left;
}
.corporate-culture > div > div > div > b{
  font-size: 28px;
  font-weight: bold;
}
.corporate-culture > div > div > div > p{
  font-size: 14px;
  line-height: 30px;
  margin-top: 18px;
  color: rgb(102, 102, 102);
}
</style>