<template>
  <!-- bottom -->
  <div class="bottom">
    <div>
      <div>
        <h2>迅驰信科</h2>
        <p>24小时服务热线</p>
        <h1>020-000000</h1>
      </div>
      <ul>
        <li v-for="item in bottom">
          <p>{{ item.name }}</p>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      bottom: [
        {name:'联系邮箱',title: '1xxx@.com'},
        {name:'联系邮箱',title: '2xxx@.com'},
        {name:'联系邮箱',title: '3xxx@.com'},
        {name:'联系邮箱',title: '4xxx@.com'},
      ]
    }
  }
})
</script>


<style scoped>
.bottom{
  width: 100%;
  height: 498px;
  background-color: #292D38;
}
.bottom > div{
  width: 1200px;
  margin: auto;
  padding: 130px 0 0;
}
.bottom > div > div{
  text-align: center;
  float: left;
  width: 380px;
}
.bottom > div > div > h2{
  font-size: 30px;
  line-height: 30px;
  color: rgb(229, 229, 229);
  font-weight: bold;
}
.bottom > div > div > p{
  font-size: 14px;
  line-height: 14px;
  color: rgb(229, 229, 229);
  margin: 55px 0 24px;
}
.bottom > div > div > h1{
  font-size: 36px;
  line-height: 36px;
  color: rgb(7, 108, 224);
  font-weight: bold;
}
.bottom > div > ul{
  width: 600px;
  float: right;
}
.bottom > div > ul > li{    
  width: 270px;
  height: 110px;
  margin-left: 30px;
  float: left;
}
.bottom > div > ul > li > p{
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  color: rgb(158, 158, 158);
  margin-bottom: 12px;
}
</style>