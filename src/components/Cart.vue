<template>
  <div class="bg-lightChoco">
    <HomeHeader class="mb-5"></HomeHeader>
    <div class="minHeight">
      <h3 class="text-center text-Choco">確認購物車內容</h3>
      <div class="container mb-5">
        <div class="row justify-content-center">
          <div class="col-sm-10 col-12">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <th></th>
                  <th>品名</th>
                  <th>數量</th>
                  <th>單價</th>
                </thead>
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td class="align-middle">
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click.prevent="delCart(item.id)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td class="align-middle">
                      {{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                    </td>
                    <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                    <td class="align-middle text-right">{{ item.final_total }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right">總計</td>
                    <td class="text-right">{{ cart.total }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="input-group mb-3 input-group-sm">
              <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode" />
              <div class="input-group-append">
                <a class="btn checkCoupon" @click.prevent="checkCouponCode">套用優惠碼</a>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <router-link to="/" class="chocoBtn rounded-lg">繼續購物</router-link>
              <router-link to="/Order" class="checkBtn rounded-lg">確認結帳</router-link>
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
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>