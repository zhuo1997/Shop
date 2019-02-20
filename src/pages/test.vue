<template>
    <div>
        <!-- <p>test</p> -->
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      arr: ''
    }
  },
  created () {
    this.$axios.get('http://localhost:8082').then(res => {
      if (res.status === 200) {
        this.arr = res.data
        console.log(this.arr)
      } else {
        console.log('err')
      }
    })
  }
}
</script>

<style>

</style>
