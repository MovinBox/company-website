<template>
  <div>
    <Title/><!-- 导航 -->
    <Swiper/><!-- 轮播 -->
    <ComponyProfile/><!-- 公司简介 -->
    <InvestmentField/><!-- 业务领域 -->
    <NewsAndInformation/><!-- 新闻资讯 -->
    <CooperativePartner/><!-- 合作伙伴 -->
    <Bottom/><!-- 底部 -->
    <!-- <UP/> -->
  </div>
</template>

<script>
import Title from '../components/Title'
import Swiper from '../components/Swiper'
import ComponyProfile from '../components/ComponyProfile'
import InvestmentField from '../components/InvestmentField'
import NewsAndInformation from '../components/NewsAndInformation'
import CooperativePartner from '../components/CooperativePartner'
import Bottom from '../components/Bottom'
// import UP from '../components/UP'

export default {
  components: {
    Title,
    Swiper,
    ComponyProfile,
    InvestmentField,
    NewsAndInformation,
    CooperativePartner,
    Bottom,
    // UP
  }
}
</script>

<style>
</style>
