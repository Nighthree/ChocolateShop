<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeBanner></HomeBanner>
    <Products class="homeMinHeight"></Products>
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
<style lang="scss" scoped>
.homeMinHeight {
  @media (min-width: 768px) {
    min-height: calc(100vh - (62px + 145.6px + 300px + 48px));
  }
  min-height: calc(100vh - (62px + 145.6px + 250px + 48px));
}
</style>


