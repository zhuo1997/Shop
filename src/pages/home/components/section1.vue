<template>
    <div class="commonone">
        <div class="con">
            <!-- <div class="commonone-img">
            <img src="/static/images/img.png" alt="">
            </div>
            <div class="commonone-img">
                <img src="/static/images/img.png" alt="">
            </div>
            <div class="commonone-img">
                <img src="/static/images/img.png" alt="">
            </div> -->
            <div class="section1">
                <i></i>
                <i>section1</i>
                <i class="iconfont">&#xe626;</i>
            </div>
            <ul v-for="(item,index) in imgurl" :key="index">
                <li><img :src="item" alt=""></li>
            </ul>
            <div class="banner">
                <img src="http://dummyimage.com/400x100/ffcc33/FFF.png&text=s1-banner" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeSection1',
  data () {
    return {
      imgurl: [
        'http://dummyimage.com/400x400/b7ddf2/333.png',
        'http://dummyimage.com/400x400/b7ddf2/333.png',
        'http://dummyimage.com/400x400/b7ddf2/333.png',
        'http://dummyimage.com/400x400/b7ddf2/333.png'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.commonone
    // overflow hidden
    // width 48.78%
    // height 0
    // padding-bottom 48.78%
    // border 1px solid red
    margin-top .6rem
    background #fff
    .con
        .section1
            font-size .5rem
            text-align center
            display flex
            padding .2rem 0
            i
                flex 1
                font-size .4rem
        ul
            li
                float left
                width 45%
                margin 2.5%
                // border 1px solid red
                img
                    width 100%
        .banner
            img
                width 100%
</style>
