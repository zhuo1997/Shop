<template>
    <div class="banner">
        <div class="banner-lef">
            <p>共0件 金额:</p>
            <p><i>0</i>元</p>
        </div>
        <router-link class="banner-mid"
            tag="div"
            to="/category">
            <p>继续购物</p>
        </router-link>
        <div class="banner-rig">
            <p>去结算</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'carBanner'
}
</script>

<style lang="stylus" scoped>
.banner
    position fixed
    display flex
    bottom 0
    left 0
    right 0
    .banner-lef,.banner-mid,.banner-rig
        flex 1
        height 1.2rem
        letter-spacing .02rem
    .banner-mid,.banner-rig
        text-align center
        line-height 1.2rem
        font-size .36rem
    .banner-lef
        p
            text-align center
            line-height .56rem
            i
                font-size .55rem
                color #FFAA00
    .banner-mid
        background #f4f4f4
    .banner-rig
        color #fff
        background #FFAA00
</style>
