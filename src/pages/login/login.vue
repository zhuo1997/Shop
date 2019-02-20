<template>
    <div class="login">
        <v-header>
          <span slot="title">登录页</span>
        </v-header>
        <test></test>
    </div>
</template>

<script>
import header from '@/common/_header'
import test from '@/pages/test'
export default {
  name: 'login',
  components: {
    'v-header': header,
    test
  }
}
</script>

<style lang="stylus" scoped>
</style>
