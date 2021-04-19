<template>    
    <div class="contact">
      <div>
        <h1>COOPERATIVE APPLICATION</h1>
        <h2>合作申请</h2>
        <ul>
          <li>
            <span>姓名：</span>
            <input type="text" name="" id="" placeholder="请输入您的姓名">
            <span>*</span>
          </li>
          <li>
            <span>电话：</span>
            <input type="text" name="" id="" placeholder="请输入您的电话">
            <span>*</span>
          </li>
          <li>
            <span>邮箱：</span>
            <input type="text" name="" id="" placeholder="请输入您的邮箱">
            <span>*</span>
          </li>
          <li>
            <span>留言：</span>
            <textarea type="text" name="" id="" placeholder="我们能为您做什么"></textarea>
            <span>*</span>
          </li>
        </ul>
        <button>提交</button>
      </div>
    </div>
</template>

<style scoped>
.contact{
  width: 100%;
  height: 720px;
  position: relative;
}
.contact::after {
  content: "";
  background-image: url(../assets/banner.jpeg);
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1; 
}
.contact > div{
  width: 1200px;
  margin: auto;
  overflow: hidden;
}
.contact > div > h1{  
  font-size: 32px;
  margin-top: 140px;
}
.contact > div > h2{
  font-size: 32px;
  font-weight: normal;
  color: rgb(102, 102, 102);
  margin: 28px auto 98px;
}
.contact > div > ul{
  overflow: hidden;
}
.contact > div > ul > li{
  width: 400px;
  height: 36px;
  line-height: 36px;
  float: left;
  margin-bottom: 20px;
}
.contact > div > ul > li > span{
  font-size: 14px;
  color: #666666;
  float: left;
}
.contact > div > ul > li > span:nth-of-type(2){
  margin-left: 8px;
  color: #ff0000;
} 
.contact > div > ul > li > input{
  width: 277px;
  height: 100%;
  border: #686868;
  border-radius: 3px;
  padding-left: 8px;
  float: left;
}
.contact > div > ul > li:nth-last-of-type(1){
  width: 1200px;
  height: 100px;
  margin-bottom: 44px;
}
.contact > div > ul > li:nth-last-of-type(1) > textarea{
  float: left;
  padding-left: 8px;
  border: #686868;
  border-radius: 3px;
  width: 1077px;
  height: 100%;
  line-height: 36px;
  resize: none;
}
.contact > div > button{
  width: 235px;
  height: 44px;
  background: #5ab4ff;
  border: #686868;
  color: #fff;
  float: left;
  margin-left: 42px;
}
</style>