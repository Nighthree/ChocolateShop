<template>
  <div>
    <HomeHeader></HomeHeader>
    <div>這裡是首頁</div>
    <router-view></router-view>
    <router-link to="/login">login</router-link>
    <router-link to="/backstage">直接到後台</router-link>
  </div>


</template>

<script>
import HomeHeader from "./HomeComponents/header";

export default {
  components: {
    HomeHeader,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>

