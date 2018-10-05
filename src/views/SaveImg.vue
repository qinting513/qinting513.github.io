<template>
  <div  class="save-content" id="captureId">
    <div class="name">{{userInfo.name}}</div>
    <div class="img"></div>
    <div class="text1">世界爱乳日，关爱你的乳房</div>
    <div class="text2">世界爱乳日，关爱你的乳房</div>
    <div class="text3">世界爱乳日，关爱你的乳房</div>
    <div class="text4">世界爱乳日，关爱你的乳房</div>
    <div class="text5">世界爱乳日，关爱你的乳房</div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    data() {
      return {}
    },
    methods: {
    },
    mounted() {
      this.$nextTick(function () {

      })
    }
  }
</script>
<style lang="scss">

  .save-content{
    background: white;
    width: 100vw;
    height: 100vh;
    background: red;
    top: 0;
    position: fixed;
    text-align: center;
    .img{
      background: url("../assets/icon_1.jpg") no-repeat center;
      background-size: cover;
      width: 260px;
      height: 370px;
      margin: 0 auto;
    }
    .name{
      font-size: 24px;
      margin: 20px 0;
    }
    .text0{
      margin-top: 8px;
      font-size: 16px;
    }
    .text1{
      font-family: Overpass-ExtraBold;
    }
    .text2{
      font-family: SourceHanSansCN-ExtraLight;
    }
    .text3{
      font-family: SourceHanSansCN-Light;
    }
    .text4{
      font-family: SourceHanSansCN-Medium;
    }
    .text5{
      font-family: SourceHanSansCN-Regular;
    }
  }
</style>
