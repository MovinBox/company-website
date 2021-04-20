<template>
  <div id="">
    <Title/><!-- 导航 -->
    <Banner/><!-- Banner -->
    <div class="news">
      <div class="bhover">
        <img src="../assets/banner.png" alt="">
        <p class="phover">123</p>
      </div>
      <ul>
        <router-link tag="li" v-for="item,index in list" :to="item.linkTo" :key="index">
          <h5>
            {{ item.title }}
            <span>{{ item.updateTime }}</span>
          </h5>
          <p>{{ item.content }}</p>
        </router-link>
      </ul>
    </div>
    <div class="newsList">
      <ul>
        <!-- <li v-for="item in list">
          <div>
            <h4>{{ item.updateTime.split('-')[2] }}</h4>
            <p>{{ item.updateTime.split('-')[0] }}/{{ item.updateTime.split('-')[1] }}</p>
          </div>
          <div>
            <h5>{{ item.title }}</h5>
            <p>{{ item.content }}</p>
          </div>
        </li> -->
        <router-link tag="li" v-for="item,index in list" :to="item.linkTo" :key="index">
          <div>
            <h4>{{ item.updateTime.split('-')[2] }}</h4>
            <p>{{ item.updateTime.split('-')[0] }}/{{ item.updateTime.split('-')[1] }}</p>
          </div>
          <div>
            <h5>{{ item.title }}</h5>
            <p>{{ item.content }}</p>
          </div>
        </router-link>
      </ul>
    </div>
    <Bottom/><!-- 底部 -->
  </div>
</template>

<script>
import Title from '@/components/Title'
import Banner from '@/components/Banner'
import Bottom from '@/components/Bottom'

export default {
  name: 'AboutUs',
  data(){
    return{
      list:[
        {
          title: '开板是什么意思？专业知识这样来理解',
          updateTime: '2019-12-11',
          content: '对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...',
          linkTo: './DetailsPage'
        },
        {
          title: '开板是什么意思？专业知识这样来理解',
          updateTime: '2019-12-11',
          content: '对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停',
          linkTo: './DetailsPage'
        },
        {
          title: '开板是什么意思？专业知识这样来理解',
          updateTime: '2019-12-11',
          content: '对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...',
          linkTo: './DetailsPage'
        },
      ],
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
.news{
  width: 1200px;
  margin: 105px auto ;
  overflow: hidden;
}
.news > div{
  width: 590px;
  height: 394px;
  float: left;
  overflow: hidden;
  position: relative;
}
.bhover:hover .phover{
  bottom: 0;
  transition: bottom .5s;
}
.news > div > img{
  height: 100%;
  display: block;
}
.news > div > p{
  width: 100%;
  height: 26px;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  position: absolute;
  transition: bottom .5s;
  bottom: -26px;
}
.news > ul{
  width: 554px;
  height: 394px;
  overflow: hidden;
  float: right;
}
.news > ul > li{
  text-align: left;
  height: 118px;
  border-bottom: 1px dashed #e5e5e5;
  margin-bottom: 38px;
}
.news > ul > li > h5{
  font-size: 16px;
  color: #000;
  font-weight: normal;
  cursor: pointer;
}
.news > ul > li > h5 > span{
  font-weight: normal;
  float: right;
}
.news > ul > li > p{
  font-size: 14px;
  line-height: 24px;
  height: 48px;
  margin: 10px 0 0;
  color: rgba(153, 153, 153, 1);
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow:ellipsis;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.newsList{
  width: 100%;
  overflow: hidden;
}
.newsList ul{
  width: 1200px;
  margin: 0 auto 90px;
}
.newsList ul li{
  width: 100%;
  height: 126px;
  margin-bottom: 40px;
  border-bottom: 1px dashed #e5e5e5;
}
.newsList ul li:nth-last-of-type(1){
  border-bottom: none;
}
.newsList ul li div:nth-of-type(1){
  width: 84px;
  height: 84px;
  color: #666666;
  background: #F2F2F2;
  overflow: hidden;
  float: left;
  cursor: pointer;
}
.newsList ul li div:nth-of-type(1) h4{
  font-size: 25px;
  line-height: 25px;
  margin-top: 20px;
  color: rgb(102, 102, 102);
  font-family: arial;
  font-weight: normal;
}
.newsList ul li div:nth-of-type(1) p{
  font-size: 14px;
  line-height: 14px;
  color: rgb(102, 102, 102);
  font-family: arial;
}
.newsList ul li div:nth-of-type(2){
  width: 1100px;
  float: left;
  margin-left: 15px;
  text-align: left;
}
.newsList ul li div:nth-of-type(2) h5{
  font-size: 14px;
  color: rgb(102, 102, 102);
  min-height: 23px;
  line-height: 23px;
  cursor: pointer;
}
.newsList ul li div:nth-of-type(2) p{
  font-size: 14px;
  margin-top: 4px;
  line-height: 24px;
  height: 48px;
  color: rgba(153, 153, 153, 1);
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow:ellipsis;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
</style>
