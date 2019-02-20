<template>
    <div class="section3">
        <ul class="section3-list">
            <li class="section3con" v-for="(item,index) in listdata" :key="index">
                <div class="section3con-left">
                    <div class="section3con-leftcon">
                        <h5>{{ item.title }}</h5>
                        <div class="time">
                            <span class="time-num">00</span>
                            <span class="time-col">:</span>
                            <span class="time-num">00</span>
                            <span class="time-col">:</span>
                            <span class="time-num">00</span>
                        </div>
                        <p>Starts at 01:45</p>
                    </div>
                </div>
                <div class="section3con-right">
                    <a href="">
                        <img :src="item.imgurl" alt="">
                        <span>{{ item.price }}</span>
                    </a>
                </div>
            </li>
        </ul>
        <img src="http://dummyimage.com/400x100/30f673/FFF.png&text=s3-banner" alt="">
    </div>
</template>

<script>
export default {
  name: 'homeSection3',
  data () {
    return {
      listdata: [
        {
          title: 'Rsions',
          price: '￥199',
          imgurl: 'http://dummyimage.com/320x200/f5f2a5/333.png'
        },
        {
          title: 'Rsions',
          price: '￥199',
          imgurl: 'http://dummyimage.com/320x200/f5f2a5/333.png'
        },
        {
          title: 'Rsions',
          price: '￥199',
          imgurl: 'http://dummyimage.com/320x200/f5f2a5/333.png'
        },
        {
          title: 'Rsions',
          price: '￥199',
          imgurl: 'http://dummyimage.com/320x200/f5f2a5/333.png'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.section3
    margin-top .6rem
    img
        width 100%
    .section3con
        display flex
        // border 1px solid blue
        padding .1rem 0
        .section3con-left
            flex 5
            padding .7rem 0
            // border 1px solid red
            .section3con-leftcon
                width 80%
                margin-left 15%
                // border 1px solid blue
                h5
                    font-size .34rem
                p
                    font-size .3rem
                    padding-top .2rem
                .time
                    padding-top .2rem
                    .time-num
                        display inline-block
                        text-align center
                        padding .2rem .14rem
                        color #fff
                        border-radius .1rem
                        background-color #444
                        font-size .26rem
                        letter-spacing .05rem
                    .tiem-col
                        display inline-block
                        color black
                        font-weight bold
        .section3con-right
            flex 5
            padding .6rem 0
            // border 1px solid red
            a
                display block
                width 80%
                position relative
                // border 1px solid blue
                img
                    width 100%
                span
                    position absolute
                    right 0
                    bottom 0
                    background #FFAA00
                    padding .04rem .06rem
                    border-radius .1rem
</style>
