<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          loop: true,
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(0, 1000, true)
    }
  }
</script>

<style>
.swiper-container {
  background-color: #686868;
  width: 100%;
  height: 800px;
}
.swiper-pagination-bullet{
  width: 50px;
  height: 3px;
  background-color: #fff;
  border-radius: 0;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active{
  height: 5px;
}
</style>