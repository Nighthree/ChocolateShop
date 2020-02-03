<template>
  <div>
    <HomeHeader></HomeHeader>
    <Products></Products>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import Products from "./HomeComponents/Products";
import HomeFooter from "./HomeComponents/HomeFooter"

export default {
  components: {
    HomeHeader,
    Products,
    HomeFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


