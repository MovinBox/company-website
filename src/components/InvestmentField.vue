<template>
  <!-- INVESTMENT FIELD 业务领域 -->
  <div class="investment-field">
    <div>
      <h1>INVESTMENT FIELD</h1>
      <div>
        <h2>业务领域</h2>
        <span>深度融合国内外大型银行、信托，以创新模式服务地产金融生态链</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="6" :style="{padding:'0 10px 0 0'}"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6":style="{padding:'0 0 0 10px'}"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      
    }
  }
}
</script>

<style>
.investment-field{
  width: 100%;
  height: 834px;
  background: rgba(247, 247, 247, 1);
}
.investment-field > div{
  width: 1200px;
  margin: auto;
  padding: 116px 0 0;
}
.investment-field > div h1{
  float: left;
  margin-bottom: 30px;
}
.investment-field > div > div{
  width: 100%;
  display: inline-block;
  margin-bottom: 84px;
}
.investment-field > div > div > h2{
  float: left;
}
.investment-field > div > div > span{
  float: right;
  margin-top: 16px;
  font-size: 14px;
  color: rgb(153, 153, 153);
}

.el-row {
  margin-bottom: 20px;
}
.el-row:nth-last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  min-height: 416px;
}
.row-bg {
  /* padding: 10px 0; */
  background-color: #f9fafc;
}
</style>