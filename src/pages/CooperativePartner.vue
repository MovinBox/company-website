<template>
  <div>
    <Banner/><!-- Banner -->
    <CooperativePartner/><!-- 合作伙伴 -->
    <Contact h1Data="COOPERATIVE APPLICATION" h2Data="合作申请"/><!-- 联系 -->
  </div>
</template>

<script>
import Banner from '../components/Banner'
import CooperativePartner from '../components/CooperativePartner'
import Contact from '../components/Contact'

export default {
  name: 'AboutUs',
  components: {
    Banner,
    CooperativePartner,
    Contact,
  }
}
</script>

<style scoped>
</style>
