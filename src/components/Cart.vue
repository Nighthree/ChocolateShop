<template>
  <div>
    <HomeHeader class="mb-5"></HomeHeader>
    <loading :active.sync="isLoading"></loading>

    <div class="minHeight container px-0">
      <div class="row px-0 mx-0 no-gutters mb-5">
        <div class="col-md-8 px-3 px-md-0">
          <h1 class="bg-yellowChoco text-Choco font-weight-bold h4 text-center py-3 mb-0">您的購物車</h1>
          <div
            class="d-flex flex-column flex-md-row py-3"
            v-for="item in cart.carts"
            :key="item.id"
          >
            <div class="d-flex align-items-center flex-grow-1 mb-2 mb-md-0">
              <div class="flex-grow-1 flex-md-grow-0">
                <div
                  class="cart-image bg-cover"
                  :style="{backgroundImage: `url(${ item.product.imageUrl })`}"
                ></div>
              </div>

              <div class="d-flex flex-column flex-md-row flex-md-grow-1 pl-1">
                <div class="flex-fill text-Choco mb-2 mb-md-0">
                  <h5 class="mb-0">{{ item.product.title }}</h5>
                  <h5 class="mb-0">{{ item.product.price | currency }}</h5>
                </div>
                <div class="cart-control pr-md-2 pr-0 d-flex align-items-center">
                  <div class="input-group">
                    <div class="input-group-append">
                      <button
                        class="btn btnOutlineYellowChoco font-weight-bold"
                        @click.prevent="changeQty(item.id, item.product.id, item.qty, false)"
                      >-</button>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      :value="item.qty"
                      
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btnOutlineYellowChoco rounded-0 font-weight-bold"
                        @click.prevent="changeQty(item.id, item.product.id, item.qty, true)"
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="price d-flex justify-content-end align-items-center flex-row-reverse flex-md-row"
            >
              <p
                class="font-weight-bold mb-0 py-2 text-Choco ml-md-0 ml-auto text-center"
                style="width:50px"
              >{{ item.product.price * item.qty | currency}}</p>
              <a class="p-2 btn btnDelet" @click.prevent="delCart(item.id)">
                <i class="far fa-trash-alt"></i>
              </a>
            </div>
          </div>
          <!-- 商品分隔 -->

          <div class="input-group my-md-3 mt-3 mb-4 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode" />
            <div class="input-group-append">
              <a class="btn checkCoupon" @click.prevent="checkCouponCode">套用優惠碼</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 px-3 px-md-0 pl-md-3">
          <div class="cart-bill p-3">
            <h5 class="font-weight-bold text-center py-3">訂單摘要</h5>
            <div class="border-white border-bottom mb-3"></div>
            <div
              class="h5 d-flex justify-content-between font-weight-bold mb-0 mt-2"
              v-if="cart.total == cart.final_total"
            >
              <span>總計</span>
              <span>{{ cart.total | currency }}</span>
            </div>
            <del
              class="h5 d-flex justify-content-between font-weight-bold mb-0 mt-2"
              v-if="cart.total !== cart.final_total"
            >
              <span>總計</span>
              <span>{{ cart.total | currency }}</span>
            </del>
            <div
              class="h5 d-flex justify-content-between font-weight-bold mb-0 mt-2"
              v-if="cart.total !== cart.final_total"
            >
              <span>折扣後</span>
              <span>{{ cart.final_total | currency }}</span>
            </div>
          </div>
          <router-link to="/Order" class="btn btnChoco btn-lg font-weight-bold rounded-0 mb-5">結帳</router-link>
        </div>
      </div>
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import HomeFooter from "./HomeComponents/HomeFooter";

export default {
  data() {
    return {
      couponCode: ""
    };
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    delCart(id) {
      this.$store.dispatch("delCart", id);
    },
    checkCouponCode() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/coupon`;
      vm.$http.post(api, { data: { code: vm.couponCode } }).then(response => {
        if (response.data.success) {
          vm.couponCode = vm.cart.carts.coupon;
          vm.getCart();
        } else {
          vm.$bus.$emit("message:push", response.data.message, "danger");
          vm.getCart();
        }
      });
    },
    changeQty(id, productId, qty, calc) {
      const vm = this;
      vm.$store.dispatch("pushLoadingStatu", true);
      const delAPI = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart/${id}`;
      const addAPI = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      let num;
      if (calc == true) {
        num = parseInt(qty) + 1;
      } else if (calc == false) {
        num = parseInt(qty) - 1;
      }
      const changeCart = {
        product_id: productId,
        qty: num
      };
      vm.$http
        .all([
          vm.$http.delete(delAPI),
          vm.$http.post(addAPI, { data: changeCart })
        ])
        .then(
          vm.$http.spread(function(delResp, addResp) {
            vm.$store.dispatch("getCart");
            vm.$store.dispatch("pushLoadingStatu", false);
          })
        );
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    cartData() {
      return this.$store.state.cartData;
    }
  },
  created(){
    this.getCart();
  }
};
</script>