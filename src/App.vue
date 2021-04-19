<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './pages/Index'

export default {
  name: 'App',
  components: {
    Index,
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 微软雅黑, "Microsoft YaHei";
  color: rgb(51, 51, 51);
}
h1{
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
}
h2{
  font-size: 32px;
  line-height: 32px;
  font-weight: normal;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>