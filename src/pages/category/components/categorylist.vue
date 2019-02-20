<template>
    <div class="category-right" ref="wrapper">
        <div class="wrappercon">
            <p>{{ this.$store.state.name }}</p>
            <ul>
            <li class="category-rightlist"
                v-for="(item,index) in listgoods"
                :key="index">
                <img src="http://dummyimage.com/2000x2000/5169b4/FFF.png" alt="">
                <p>{{ item.goods }}</p>
            </li>
            </ul>
            <div style="clear:both;"></div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'categoryList',
  props: {
    listgoods: ''
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  .category-right
    flex 7.5
    height 16rem
    overflow hidden
    .wrappercon
      p
        font-size .5rem
        line-height 1rem
      ul
        display block
        .category-rightlist
          float left
          width 25%
          // border 1px solid red
          margin .1rem 4%
          img
            width 100%
          p
            text-align center
            line-height 1rem
            font-size .36rem
</style>
