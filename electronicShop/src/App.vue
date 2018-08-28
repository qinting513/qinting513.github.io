<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <page-header class="pageHeader"></page-header>
    <category-view></category-view>
    <main-view></main-view>
  </div>
</template>

<script>

import PageHeader from '@/components/Head/PageHeader'
import CategoryView from '@/components/Category/CategoryView'
import MainView from '@/components/MainView/MainView'

export default {
  name: 'App',
  components: { PageHeader,CategoryView,MainView }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.pageHeader {
  margin-top:10px;
}
</style>
