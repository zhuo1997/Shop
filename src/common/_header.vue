<template>
    <div class="header">
        <router-link tag="div" class="header-left" to="/">
            <i class="iconfont">&#xe600;</i>
        </router-link>
        <div class="header-mid">
            <slot name="title"></slot>
        </div>
        <div class="header-right"></div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
.header
    display flex
    color #333
    background #F8FCFF
    .header-left,.header-right,.header-mid
        text-align center
        line-height 1rem
    .header-left,.header-right
        flex 2
    .header-mid
        flex 6
        font-size .36rem
    .header-left
        i
            font-size .5rem
</style>
