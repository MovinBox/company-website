<template>
  <!-- COOPERATIVE PARTNER 合作伙伴 -->
  <div class="partner">
    <div>
      <h1>COOPERATIVE PARTNER</h1>
      <div>
        <h2>合作伙伴</h2>
      </div>

      <ul>
        <li v-for="item in partner">          
          <img :src= "item.img" :alt="item.name">
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default ({
  data()  {
    return {
      partner: [
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
        {
          name: 'name',
          img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
        },
      ]
    }
  }
})
</script>

<style scoped>
.partner{
  width: 100%;
  height: 720px;
  text-align: center;
  background: rgba(247, 247, 247, 1);
}
.partner > div{
  width: 1200px;
  margin: auto;
  padding: 116px 0 0;
}
.partner > div h1{
  margin-bottom: 20px;
}
.partner > div > div{
  width: 100%;
  display: inline-block;
  margin-bottom: 84px;
}
.partner > div > div > span{
  float: right;
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
}
.partner > div > ul{
  width: 100%;
}
.partner > div > ul > li{
  width: 216px;
  height: 130px;
  float: left;
  overflow: hidden;
  border: 1px solid #ccc;
  margin: 7px 11px 40px;
  /* 图片居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.partner > div > ul > li > img{
  width: 70%;
}


</style>