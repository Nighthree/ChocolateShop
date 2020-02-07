<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeBanner></HomeBanner>
    <Products></Products>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import HomeBanner from "./HomeComponents/Banner";
import Products from "./HomeComponents/Products";
import HomeFooter from "./HomeComponents/HomeFooter";

export default {
  components: {
    HomeHeader,
    HomeBanner,
    Products,
    HomeFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


