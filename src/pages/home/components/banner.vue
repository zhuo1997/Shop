<template>
    <mt-tabbar fixed>
        <mt-tab-item id="tab1">
            <router-link to="">
                <i class="iconfont">&#xe606;</i>
                <p>首页</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <router-link to="/category">
                <i class="iconfont">&#xe7f9;</i>
                <p>分类</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <router-link to="/car">
                <i class="iconfont">&#xe607;</i>
                <p>购物车</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <router-link to="/login">
                <i class="iconfont">&#xe64a;</i>
                <p>我的</p>
            </router-link>
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
export default {
  name: 'homeBanner'
}
</script>

<style lang="stylus" scoped>
.mint-tabbar
    position fixed
    left 0
    right 0
    background #fff
    z-index 999
    i
        font-size .5rem
        color #515151
    p
        font-size .3rem
        color #515151
</style>
