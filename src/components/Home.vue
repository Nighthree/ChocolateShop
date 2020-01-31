<template>
  <div>
    <HomeHeader></HomeHeader>
    <Products></Products>
    <router-link to="/login">login</router-link>
    <router-link to="/backstage">直接到後台</router-link>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import Products from "./HomeComponents/Products"

export default {
  components: {
    HomeHeader,
    Products,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


