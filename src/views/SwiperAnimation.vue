<template>
  <div>
    <x-header>第三个页面</x-header>
    <h1>转场动效---杨欢</h1>
    <XButton text="患者信息" type="primary" @click.native="jump2Next"></XButton>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {XButton, XHeader} from 'vux'
  export default {
    components: {
      XButton, XHeader
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'language'
      ])
    },
    data() {
      return {}
    },
    methods: {
      jump2Next() {
        this.$router.push({path: '/swiper-info'})
      }
    },
    mounted() {
      this.$nextTick(function () {

      })
    }
  }
</script>
