<template>
    <div class="category-left">
        <ul>
            <li class="category-leftlist"
            v-for="(item,index) in listname"
            :key="index"
            @click="choosename(item.name, index), changeclass(index)"
            :style="addclass"
            >
            <router-link tag="div"
              to="/category">
                {{ item.name }}
            </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'categoryNav',
  props: {
    listname: ''
  },
  data () {
    return {
      firstname: '',
      index: '',
      indexname: '',
      addclass: ''
    }
  },
  methods: {
    choosename (name, index) {
      this.changename(name)
    },
    changeclass (index) {
      this.addclass = {color: 'red'}
    },
    ...mapMutations(['changename'])
  },
  beforeUpdate () {
    this.firstname = this.listname[0].name
    this.changename(this.firstname)
  }
}
</script>

<style lang="stylus" scoped>
  .category-left
    flex 2.5
    ul
      .category-leftlist
        font-size .4rem
        line-height 1.1rem
        letter-spacing .05rem
        text-align center
      .category-leftlist:link
        font-size .5rem
        position relative
</style>
