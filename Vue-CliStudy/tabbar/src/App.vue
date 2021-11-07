<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "./components/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>


<style>
  /*在style中动态引入csss文件可以使用 @import “文件路径” 即可*/
  @import "./assets/css/base.css";

</style>
