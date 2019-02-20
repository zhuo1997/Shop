<template>
    <div class="category">
        <v-header>
          <span slot="title">商品分类</span>
        </v-header>
        <div class="categorycon">
          <category-nav :listname="listname"></category-nav>
          <router-view></router-view>
          <category-list :listgoods="listgoods"></category-list>
        </div>
    </div>
</template>

<script>
import header from '@/common/_header'
import categoryNav from '@/pages/category/components/categorynav'
import categoryList from '@/pages/category/components/categorylist'
export default {
  name: 'category',
  components: {
    'v-header': header,
    categoryNav,
    categoryList
  },
  data () {
    return {
      listname: '',
      listgoods: ''
    }
  },
  created () {
    this.$axios.get('/goods').then(res => {
      if (res.status === 200) {
        this.listname = res.data.user
        this.listgoods = res.data.goods
      } else {
        console.log('status err')
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.categorycon
  display flex
</style>
