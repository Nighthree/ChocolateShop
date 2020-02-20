<template>
  <div>
    <HomeHeader></HomeHeader>
    <Cart></Cart>
    <HomeBanner class="mb-3 mb-md-5"></HomeBanner>
    <!-- <Products class="homeMinHeight"></Products> -->
    <section class="py-4 mb-5">
      <div class="container-fuild bg-lightChoco">
        <div class="row no-gutters">
          <div class="col-12 col-sm-6">
            <img
              class="img-fluid sectionBreak"
              src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2018/11/OurSupplier1-570x570.jpg"
              alt
            />
          </div>
          <div class="col-12 col-sm-6">
            <div class="d-flex justify-content-center d-sm-block">
              <h4 class="h1 mb-3 text-Choco font-weight-bold">
                Our
                <br />Chocolatier
              </h4>
            </div>
            <div class="d-flex justify-content-center d-sm-block"
            >
              <p class="lineHeight h5 text-secondary mb-0">
                由得獎無數的比利時巧克力工匠
                <br />遠從非洲迦納精挑細選巧克力原豆
                <br />在比利時溫控工作室手工細製
                <br />每一種口味 每一顆巧克力
                <br />堅持給客戶最好的品質
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import Cart from "./HomeComponents/Cart"
import HomeBanner from "./HomeComponents/Banner";
import HomeFooter from "./HomeComponents/HomeFooter";

export default {
  components: {
    HomeHeader,
    Cart,
    HomeBanner,
    HomeFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// <style lang="scss" scoped>
.lineHeight{
  line-height: 1.5;
}
.sectionBreak{
  @media (min-width: 768px) {
    margin-top: -20px;
    margin-bottom: -40px;
  }
}
// .homeMinHeight {
//   @media (min-width: 768px) {
//     min-height: calc(100vh - (62px + 145.6px + 300px));
//   }
//   min-height: calc(100vh - (62px + 145.6px + 250px));
// }
</style>


