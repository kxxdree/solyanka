<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import PageLogin from './components/AuthPages/PageLogin.vue'
import HomePage from './components/HomePage/HomePage.vue'
import MainPage from './components/MainPage/MainPage.vue'


export default {
  data() {
    return {
      components: {
        PageLogin,
        HomePage,
        MainPage
      }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}
</style>
