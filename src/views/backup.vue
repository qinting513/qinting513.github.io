<template>
  <div class="loading">
    <div class="container">

    </div>
    <div class="text">

    </div>
    <transition-group name="fade">
      <p :key="1" v-show="showOne">你将看到一组</p >
      <p :key="2" v-show="showTwo">特殊的影视作品</p >
    </transition-group>
    <XButton text="查看" type="primary" @click.native="jump2Next"></XButton>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {XButton} from 'vux'
  export default {
    components: {
      XButton
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'language'
      ])
    },
    data() {
      return {
        showOne: false,
        showTwo: false
      }
    },
    methods: {
      jump2Next() {
        this.$router.push({path: '/swiper-img'})
      },
      addText() {
        setTimeout(() => {
          if (!this.showOne) {
            this.showOne = true
            this.addText()
          } else if (!this.showTwo) {
            this.showTwo = true
          }
        }, 1000)
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.addText()
      })
    }
  }
</script>
<style lang="scss" scoped>
  .loading {
    background: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: relative;
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .container {
      @extend .center;
      width: 20rem;
      height: 23rem;
      background: url("../assets/ic_bcg.jpg") no-repeat center;
      background-size: 100%;
    }
    .text {
      @extend .center;
      height: 2rem;
      text-align: center;
      font-size: 20px;
      color: white;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
</style>
