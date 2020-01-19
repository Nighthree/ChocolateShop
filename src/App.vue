<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style lang="scss">
@import './assets/all.scss';
</style>
