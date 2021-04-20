<template>
  <div id="title" class="title">
    <div>logo</div>
    <ul>
      <router-link 
        tag="li" 
        v-for="item,index in titleList"
        :to="item.linkTo"
        :key="index" 
        >
        {{item.Name}}
      </router-link>     
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      titleList: [
        {Name: '首页',linkTo: '/'},
        {Name: '关于我们',linkTo: '/AboutUs'},
        {Name: '公司业务',linkTo: '/CorporateBusiness'},
        {Name: '新闻资讯',linkTo: '/News'},
        {Name: '合作伙伴',linkTo: '/CooperativePartner'},
        {Name: '联系我们',linkTo: '/ContactUs'},
      ],
      list: [],
      nowIndex: 0,
    }
  },
  methods: {
    changeClass (index) {
      console.log(index)
      this.nowIndex = index
    },
  },
}
</script>

<style>
.title{
  width: 1200px;
  height: 120px;
  margin: 0 auto;
  font-size: 16px;

}
.title div{
  float: left;
}
.title ul{
  float: right;
  margin: 20px 10px 0 0;
}
.title ul li{
  cursor: pointer;
  float: left;
  padding: 34px 10px;
  margin: 0 0 0 30px;
  border-bottom: 2px solid #fff;
}
.title ul li:hover{
  color: #1e50ae;
  border-bottom: 2px solid #1e50ae;
}
.router-link-exact-active{
  color: #1e50ae;
  border-bottom: 2px solid #1e50ae!important;
}
</style>
