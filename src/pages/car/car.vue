<template>
    <div class="car">
        <v-header>
          <span slot="title">购物车</span>
        </v-header>
        <car-main></car-main>
        <car-banner></car-banner>
    </div>
</template>

<script>
import header from '@/common/_header'
import carBanner from '@/pages/car/components/banner'
import carMain from '@/pages/car/components/main'
export default {
  name: 'Car',
  components: {
    'v-header': header,
    carBanner,
    carMain
  }
}
</script>

<style lang="stylus" scoped>
</style>
