<template>
  <div>
    <Swiper/><!-- 轮播 -->
    <ComponyProfile/><!-- 公司简介 -->
    <InvestmentField/><!-- 业务领域 -->
    <NewsAndInformation/><!-- 新闻资讯 -->
    <CooperativePartner/><!-- 合作伙伴 -->
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import ComponyProfile from '@/components/ComponyProfile'
import InvestmentField from '@/components/InvestmentField'
import NewsAndInformation from '@/components/NewsAndInformation'
import CooperativePartner from '@/components/CooperativePartner'

export default {
  components: {
    Swiper,
    ComponyProfile,
    InvestmentField,
    NewsAndInformation,
    CooperativePartner,
  }
}
</script>

<style>
</style>
