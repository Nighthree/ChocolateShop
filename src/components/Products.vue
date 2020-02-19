<template>
  <div>
    <HomeHeader></HomeHeader>
    <loading :active.sync="isLoading"></loading>
    <Cart></Cart>

    <div class="minHeight py-4 pt-md-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <ul class="ulStyle">
              <li class="text-center productList rounded" :class="{ 'active': searchText == ''}">
                <a
                  href="#"
                  class="d-block text-decoration-none py-2"
                  @click.prevent="getSearchText(item = '')"
                >全部商品</a>
              </li>
              <li
                class="text-center productList rounded"
                v-for="item in categories"
                :key="item"
                :class="{ 'active': searchText == item }"
              >
                <a
                  href="#"
                  class="d-block text-decoration-none py-2"
                  @click.prevent="getSearchText(item)"
                >{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 mb-4"
                v-for="item in filterData"
                :key="item.id"
              >
                <div class="card cardList">
                  <a
                    href="#"
                    class="bg-cover cardImgHeight d-block"
                    :style="{backgroundImage: `url(${ item.imageUrl })`}"
                  >
                    <div class="glass d-flex justify-content-center">
                      <span>點擊查看更多</span>
                    </div>
                  </a>
                  <div class="card-body p-2 position-relative pb-4">
                    <p class="mb-2 badge badge-secondary">{{ item.category }}</p>
                    <h5
                      class="card-title font-weight-bold text-dark mb-1 text-center"
                    >{{ item.title }}</h5>
                    <div
                      class="h6 font-weight-bold text-danger text-center"
                      v-if="!item.price"
                    >{{ item.origin_price | currency }} 元</div>
                    <div
                      class="h6 font-weight-bold text-danger text-center"
                      v-if="item.price"
                    >{{ item.price | currency }} 元</div>
                    <a
                      href="#"
                      title="加入購物車"
                      class="addCart"
                      @click.stop.prevent="addCart(item.id)"
                    >
                      <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading == item.id"></i>
                      <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== item.id"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import HomeFooter from "./HomeComponents/HomeFooter";
import Cart from "./HomeComponents/Cart";

export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    getSearchText(item) {
      this.searchText = item;
      this.$store.dispatch("getSearchText");
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    categories() {
      return this.$store.state.status.categories;
    },
    products() {
      return this.$store.state.products;
    },
    filterData() {
      const vm = this;
      const filterCategory = vm.searchText;
      if (filterCategory == "") {
        return vm.products;
      } else {
        const categoryData = vm.products.filter(function(item) {
          return item.category == filterCategory;
        });
        return categoryData;
      }
    },
    addCartLoading() {
      return this.$store.state.status.addCartLoading;
    }
  },
  created() {
    this.$store.dispatch("getSearchText",'');
    this.getProducts();
  },
  components: {
    HomeHeader,
    HomeFooter,
    Cart
  }
};
</script>