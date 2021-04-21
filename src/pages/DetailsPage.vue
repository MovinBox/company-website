<template>
    <div>
        <Banner/><!-- Banner -->
        <div class="details-page">
            <h1>{{title}}</h1>
            <p>{{updateTime}}</p>
            <div>{{content}}</div>
            <div>
                <span>下一篇：</span>
                <router-link tag="span" to="./News">{{title}}</router-link>                
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  name: 'AboutUs',
  components: {
    Banner,
  },
  data(){
      return{
        title: '开板是什么意思？专业知识这样来理解',
        updateTime: '2019-12-11',
        content: '对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...对于开板的意思,一些资料显示是对市场进行一种开发，对于股票来是一般的情况下连续涨停板的打开，假如说有一段时间它涨停...',
        linkTo: './News'
    }      
  }
}
</script>

<style scoped>
.details-page{
    width: 1200px;
    margin: auto;
    overflow: hidden;
    text-align: left;
}
.details-page > h1{
    font-size: 25px;
    line-height: 25px;
    font-weight: normal;
    margin: 46px 0 30px;
    color: #333333;
}
.details-page > p{
    font-size: 13px;
    line-height: 13px;
    color: #adadad;
}
.details-page > div:nth-of-type(1){
    text-align: left;
    padding: 28px 0;
    margin: 36px 0;
    color: #676767;
    border: 2px #f0efef;
    border-style: solid none dotted none;
}
.details-page > div:nth-of-type(2){
    font-size: 14px;
    line-height: 14px;
    color: #666666;
    margin-bottom: 92px;
}
.details-page > div:nth-of-type(2) > span{
    font-size: 14px;
    line-height: 14px;
    color: #666666;
}
</style>
