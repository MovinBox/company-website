<template>
  <!-- NEWS AND INFORMATION 新闻资讯 -->
  <div class="news">
    <div>
      <h1>NEWS AND INFORMATION</h1>
      <div>
        <h2>新闻资讯</h2>
        <span>MORE</span>
      </div>
      
      <ul>
        <li v-for="item in news">
          <div>
            <h3>{{ item.date }}</h3>
            <h5>{{ item.year }}</h5>
          </div>
          <div>
            <h4>{{ item.newsTitle }}</h4>
            <p>{{ item.news }}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default ({
  data()  {
    return {
      news: [
        {
          year: '2021',
          date: '04/06',
          newsTitle: '新闻标题新闻标题新闻标题新闻标题新闻标题',
          news: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
        },
        {
          year: '2021',
          date: '04/06',
          newsTitle: '新闻标题新闻标题新闻标题新闻标题新闻标题',
          news: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内'
        },
        {
          year: '2021',
          date: '04/06',
          newsTitle: '新闻标题新闻标题新闻标题新闻标题新闻标题',
          news: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
        },
        {
          year: '2021',
          date: '04/06',
          newsTitle: '新闻标题新闻标题新闻标题新闻标题新闻标题',
          news: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
        },
      ]
    }
  }
})
</script>

<style scoped>
.news{
  width: 100%;
  height: 663px;
  /* background: rgba(247, 247, 247, 1); */
}
.news > div{
  width: 1200px;
  margin: auto;
  padding: 116px 0 0;
}
.news > div h1{
  float: left;
  margin-bottom: 30px;
}
.news > div > div{
  width: 100%;
  display: inline-block;
  margin-bottom: 84px;
}
.news > div > div > h2{
  float: left;
}
.news > div > div > span{
  float: right;
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
}
.news > div > ul{
  width: 100%;
}
.news > div > ul > li{
  width: 580px;
  height: 108px;
  float: left;
  text-align: left;
}
.news > div > ul > li:nth-of-type(1), .news > div > ul > li:nth-of-type(2){
  margin-bottom: 36px;
  border-bottom: 1px dashed rgb(194, 194, 194);
}
.news > div > ul > li:nth-of-type(2n-1){
  margin-right: 20px;
}
.news > div > ul > li:nth-of-type(2n){
  margin-left: 20px;
}
.news > div > ul > li > div{
  float: left;
  height: 100%;
}
.news > div > ul > li > div:nth-of-type(1){
  width: 100px;
}
.news > div > ul > li > div:nth-of-type(2){
  width: 480px;
}
.news > div > ul > li > div > h3{
  font-weight: normal;
  font-size: 30px;
  line-height: 30px;
  color: #4a4a4a;
  font-family: arial;
}
.news > div > ul > li > div > h5{
  font-size: 15px;
  line-height: 15px;
  color: #767676;
  font-family: arial;
}
.news > div > ul > li > div > h4{
  min-height: 23px;
  line-height: 23px;
  cursor: pointer;
  font-size: 16px;
  color: rgba(102, 102, 102, 1);
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
}
.news > div > ul > li > div > p{
  font-size: 14px;
  line-height: 24px;
  color: rgba(153, 153, 153, 1);
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
}

</style>