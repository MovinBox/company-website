<template>
  <div>
    <Title/><!-- 导航 -->
    <Banner/><!-- Banner -->
    <CooperativePartner/><!-- 合作伙伴 -->
    <Contact/><!-- 联系 -->
    <Bottom/><!-- 底部 -->
  </div>
</template>

<script>
import Title from '../components/Title'
import Banner from '../components/Banner'
import CooperativePartner from '../components/CooperativePartner'
import Contact from '../components/Contact'
import Bottom from '../components/Bottom'

export default {
  name: 'AboutUs',
  components: {
    Title,
    Banner,
    CooperativePartner,
    Contact,
    Bottom,
  }
}
</script>

<style scoped>
</style>
