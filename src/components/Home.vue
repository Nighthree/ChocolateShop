<template>
  <div>
    <HomeHeader></HomeHeader>
    <Cart></Cart>
    <HomeBanner class="mb-3 mb-md-5"></HomeBanner>
    <!-- <Products class="homeMinHeight"></Products> -->
    <section class="py-4 mb-5 container-fuild">
      <div class="row mx-0 flex-md-row flex-row-reverse">
        <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div class="d-flex justify-content-center d-sm-block">
            <h4 class="h1 mb-3 text-Choco font-weight-bold textStyle">我們的堅持</h4>
          </div>
          <div class="d-flex justify-content-center d-sm-block">
            <p class="textStyle h5 text-secondary">
              由得獎無數的比利時巧克力工匠
              <br />遠從非洲迦納精挑細選巧克力原豆
              <br />在比利時溫控工作室手工細製
              <br />每一種口味 每一顆巧克力
              <br />堅持給客戶最好的品質
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center p-5">
          <img
            class="img-fluid"
            src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2018/11/OurSupplier1-570x570.jpg"
            alt
          />
        </div>
      </div>
    </section>
    <section class="container">
      <h3 class="textStyle h1 mb-3 text-Choco font-weight-bold text-center">店長推薦</h3>
      <div class="row">
        <div class="col-md-4 col-12 mb-3" v-for="item in pushProducts" :key="item.id">
          <a class="card cardList" @click.stop.prevent="createProduct(item.id)">
            <div
              class="bg-cover cardImgHeight"
              :style="{backgroundImage: `url(${ item.imageUrl })`}"
            >
              <div class="glass d-flex justify-content-center">
                <span>點擊查看更多</span>
              </div>
            </div>
            <div class="card-body p-2 position-relative pb-4">
              <p class="mb-2 badge badge-secondary">{{ item.category }}</p>
              <h5 class="card-title font-weight-bold text-dark mb-1 text-center">{{ item.title }}</h5>
              <div
                class="h6 font-weight-bold text-danger text-center"
                v-if="!item.price"
              >{{ item.origin_price | currency }} 元</div>
              <div
                class="h6 font-weight-bold text-danger text-center"
                v-if="item.price"
              >{{ item.price | currency }} 元</div>
              <a href="#" title="加入購物車" class="addCart" @click.stop.prevent="addCart(item.id)">
                <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading == item.id"></i>
                <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== item.id"></i>
              </a>
            </div>
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-end pb-5 pt-3">
        <router-link to="/products" class="btn btnChoco px-5">
          其他精選巧克力
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </section>

    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import Cart from "./HomeComponents/Cart";
import HomeBanner from "./HomeComponents/Banner";
import HomeFooter from "./HomeComponents/HomeFooter";

export default {
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    createProduct(id) {
      this.$router.push(`/product/${id}`);
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    addCartLoading() {
      return this.$store.state.status.addCartLoading;
    },
    pushProducts() {
      return this.products.filter(function(item) {
        return item.category == "精緻巧克力球";
      });
    }
  },
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
.textStyle {
  line-height: 1.5;
  letter-spacing: 5px;
}
p.textStyle {
  @media (max-width: 430px) {
    letter-spacing: 2px;
    font-size: 16px;
  }
}
.sectionBreak {
  @media (min-width: 768px) {
    margin-top: -20px;
    margin-bottom: -40px;
  }
}
</style>


