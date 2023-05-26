<template>
  <div id="app">
    <HomePage />
    <router-view></router-view>
  </div>
</template>

<script>
import PageLogin from './components/AuthPages/PageLogin.vue'
import HomePage from './components/HomePage/HomePage.vue'

export default {
  data() {
    return {
      components: {
        PageLogin,
        HomePage
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
