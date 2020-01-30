<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home';

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
