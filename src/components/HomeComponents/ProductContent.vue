<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6 mb-4" v-for="item in filterData" :key="item.id">
        <div class="card h-100 cardList">
          <a
            href="#"
            class="bg-cover cardImgHeight d-block"
            :style="{backgroundImage: `url(${ item.imageUrl })`}"
            @click.prevent="OpenProductModal(item.id)"
          >
            <div class="glass d-flex justify-content-center">
              <span>{{ item.title }}</span>
            </div>
          </a>
          <div class="card-body p-2 position-relative pb-4">
            <p class="mb-2 badge badge-secondary">{{ item.category }}</p>
            <h5
              class="card-title font-weight-bold text-dark mb-1 text-center"
              @click.prevent="OpenProductModal(item.id)"
            >{{ item.title }}</h5>
            <div
              class="h6 font-weight-bold text-danger text-center"
              v-if="!item.price"
            >{{ item.origin_price | currency }} 元</div>
            <div
              class="h6 font-weight-bold text-danger text-center"
              v-if="item.price"
            >{{ item.price | currency }} 元</div>
            <a href="#" title="加入購物車" class="addCart" @click.prevent="addCart(item.id)">
              <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading == item.id"></i>
              <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== item.id"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 查看更多Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productModalTitle">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">網路優惠價 {{ product.price }} 元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.cartNum">
              <option :value="productNum" v-for="productNum in 10" :key="productNum">選購 {{productNum}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong v-if="product.cartNum">{{ product.cartNum * product.price }}</strong>
              <strong v-if="product.cartNum * product.price == NaN"></strong> 元
            </div>
            <a
              href="#"
              title="加入購物車"
              class="modalAddCart"
              @click.prevent="addCart(product.id, product.cartNum)"
            >
              <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading == product.id"></i>
              <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== product.id"></i>
              加入購物車
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Pagination from "../BackComponents/Pages/Pagination";

export default {
  data() {
    return {
      watchMoreLoading: "",
      product: {},
      products: {}
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products/all`;
      vm.$http.get(api).then(response => {
        vm.products = response.data.products;
      });
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
      $("#productModal").modal("hide");
    },
    OpenProductModal(id) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/${id}`;
      vm.watchMoreLoading = id;
      vm.$http.get(api).then(response => {
        vm.product = response.data.product;
        $("#productModal").modal("show");
        vm.watchMoreLoading = "";
      });
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    paginations() {
      return this.$store.state.paginations;
    },
    categories() {
      return this.$store.state.status.categories;
    },
    addCartLoading() {
      return this.$store.state.status.addCartLoading;
    },
    filterData() {
      const vm = this;
      const filterCategory = vm.$store.state.status.searchTextItem;
      if (filterCategory == "") {
        return vm.products;
      } else {
        const categoryData = vm.products.filter(function(item) {
          return item.category == filterCategory;
        });
        return categoryData;
      }
    }
  },
  components: {
    Pagination
  },
  created() {
    this.$store.dispatch("getSearchText", '');
    this.getProducts();
  }
};
</script>