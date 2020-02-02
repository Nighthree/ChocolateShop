<template>
  <div>
    <HomeHeader></HomeHeader>
    <Products></Products>
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


