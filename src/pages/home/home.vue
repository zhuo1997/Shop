<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-section1></home-section1>
      <home-section2></home-section2>
      <home-section3></home-section3>
      <home-section4></home-section4>
      <home-banner></home-banner>
      <base-line></base-line>
    </div>
</template>

<script>
import homeHeader from '@/pages/home/components/header'
import homeSwiper from '@/pages/home/components/swiper'
import homeSection1 from '@/pages/home/components/section1'
import homeSection2 from '@/pages/home/components/section2'
import homeSection3 from '@/pages/home/components/section3'
import homeSection4 from '@/pages/home/components/section4'
import homeBanner from '@/pages/home/components/banner'
import baseLine from '@/common/_baseline'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeSection1,
    homeSection2,
    homeSection3,
    homeSection4,
    homeBanner,
    baseLine
  }
}
</script>

<style lang="stylus" scoped>
.home
  background #f8fcff
</style>
