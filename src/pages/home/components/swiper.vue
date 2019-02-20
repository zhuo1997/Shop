<template>
    <div class="swiper-container">
        <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide class="swiper-img" v-for="(item,index) in imgurl" :key="index">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- <div class="swiper-scrollbar"></div> -->
            </swiper>
        </div>
        <div class="content">
          <div class="content-left">
            <i class="iconfont">&#xe770;</i>
            自营品牌
          </div>
          <div class="content-middle">
            <i class="iconfont">&#xe770;</i>
            48小时快速退款
          </div>
          <div class="content-right">
            <i class="iconfont">&#xe770;</i>
            无忧退货
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // scrollbar: '.swiper-scrollbar',
        autoplay: true,
        loop: true,
        paginationClickable: true,
        observer: true,
        observeParents: true
      },
      imgurl: [
        // {
        //   url: 'http://dummyimage.com/800x400/04a1f7/FFF.png'
        // },
        // {
        //   url: 'http://dummyimage.com/800x400/04a1f7/FFF.png'
        // },
        // {
        //   url: 'http://dummyimage.com/800x400/04a1f7/FFF.png'
        // },
        // {
        //   url: 'http://dummyimage.com/800x400/04a1f7/FFF.png'
        // }
        'http://dummyimage.com/800x400/04a1f7/FFF.png',
        'http://dummyimage.com/800x400/04a1f7/FFF.png',
        'http://dummyimage.com/800x400/04a1f7/FFF.png',
        'http://dummyimage.com/800x400/04a1f7/FFF.png'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container
    .swiper
        overflow hidden
        width 100%
        height 0
        padding-bottom 50%
        .swiper-img
            img
                width 100%
    .content
      display flex
      padding .2rem 0
      // border 1px solid red
      .content-left,.content-middle,.content-right
        text-align center
        flex 3.33
        .iconfont
          color red
</style>
