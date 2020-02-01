<template>
  <div>
    <div class="text-right my-4">
      <button class="btn btn-primary" @click.prevent="getCart()">取得資料</button>
    </div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm h-100">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{backgroundImage: `url(${ item.imageUrl })`}"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right">{{ item.category }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <div class="h5" v-if="!item.price">原價 {{ item.origin_price }} 元</div>
            <!-- <del class v-if="item.price">原價 {{ item.origin_price }} 元</del> -->
            <div class="h5 text-right" v-if="item.price">優惠價 {{ item.price }} 元</div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click.prevent="OpenProductModal(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.watchMoreLoading == item.id"></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click.prevent="addCart(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.addCartLoading == item.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>

    <Pagination :pagenation="paginations" @changeCurrPage="getProducts"></Pagination>

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
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary" @click="addCart(product.id, product.num)">
              <i class="fas fa-spinner fa-spin" v-if="status.addCartLoading == product.id"></i>
              加入購物車
            </button>
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
      isLoading: false,
      products: [],
      paginations: {},
      status: {
        watchMoreLoading: "",
        addCartLoading: "",
        categoryTitle: 'all',
      },
      product: [],
      category:[],
      cart:[],
    };
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.products = response.data.products;
        vm.isLoading = false;
        vm.paginations = response.data.pagination;
      });
      vm.getCategory();
    },
    addCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      vm.status.addCartLoading = id;
      const cart = {
        product_id: id,
        qty
      };
      vm.$http.post(api, { data: cart }).then(response => {
        $("#productModal").modal("hide");
        vm.getCart();
        vm.status.addCartLoading = "";
      });
    },
    OpenProductModal(id) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/${id}`;
      vm.status.watchMoreLoading = id;
      vm.$http.get(api).then(response => {
        vm.product = response.data.product;
        $("#productModal").modal("show");
        vm.status.watchMoreLoading = "";
      });
    },
    getCart() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.cart = response.data.data;
        vm.isLoading = false;
      });
    },
    getCategory(){
      const vm = this;
      const categoryItem = [];
      vm.products.forEach(function(item){
        categoryItem.push(item.category);
      });
      vm.category = Array.from(new Set(categoryItem));
    },
  },
  components: {
    Pagination
  },
  created() {
    const vm = this;
    vm.getProducts();
    vm.getCart();
  }
};
</script>