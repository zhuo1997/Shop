<template>
    <div class="header">
        <div class="home-header-left"></div>
        <h2 class="home-header">电商联盟</h2>
        <div class="home-icon">
            <i class="iconfont">&#xe61d;</i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
.header
  height 1rem
  display flex
  background #fff
  // border 1px solid red
  .home-header-left
    flex 3
    // border 1px solid red
  .home-header
    flex 4
    font-size .4rem
    text-align center
    line-height 1rem
    // border 1px solid red
  .home-icon
    flex 3
    right .1rem
    text-align right
    // border 1px solid red
    line-height 1rem
    .iconfont
        font-size .4rem
        margin-right .4rem
</style>
