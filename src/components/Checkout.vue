<template>
  <div>
    <HomeHeader class="mb-5"></HomeHeader>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <ul class="row ulStyle justify-content-md-around">
        <li class="col-md-3 col-12 checkStep text-center mb-3">1.填寫訂購資料</li>
        <li
          class="col-md-3 col-12 checkStep text-center mb-3"
          :class="{active :order.is_paid == false}"
        >2.金流付款</li>
        <li
          class="col-md-3 col-12 checkStep text-center mb-3"
          :class="{active :order.is_paid == true}"
        >3.完成！</li>
      </ul>
    </div>
    <div class="minHeight">
      <h3 class="text-center text-Choco mb-3">
        <img
          src="https://raw.githubusercontent.com/Nighthree/ChocolateShop/master/src/assets/images/chocolate_icon.png"
          style="height:30px"
        />確認訂購資料
      </h3>
      <div class="container mb-5">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12">
            <table class="table mb-0">
              <thead>
                <th class="align-middle d-none d-sm-table-cell"></th>
                <th>品名</th>
                <th>數量</th>
                <th class="text-right">單價</th>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td class="text-center align-middle d-none d-sm-table-cell">
                    <img :src="item.product.imageUrl" alt style="height:50px;" />
                  </td>
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle text-right">{{ item.qty }} {{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                </tr>
              </tbody>
            </table>
            <p class="text-right h5 mb-5">
              總計：
              <span class="text-danger h4">{{ order.total | currency }}</span> 元
            </p>
          </div>

          <div class="col-lg-8 col-md-10 col-12">
            <table class="table">
              <tbody>
                <tr>
                  <th width="100">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-success" @click="paySuccess"> 付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-right" v-if="!order.is_paid">
              <a class="btn btn-pay" @click.prevent="payOrder()">確認付款去</a>
            </div>
            <router-link
              to="/products"
              class="toProducts font-weight-bold text-center mb-3 d-block"
              v-else
            >
              <i class="fas fa-arrow-left"></i> 繼續選購商品
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <HomeFooter></HomeFooter>

    <!-- 付款成功的Modal -->
    <div
      class="modal fade"
      id="paySuccess"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header alert-success">
            <h5 class="modal-title font-weight-bold h6" id="paySuccess">付款成功</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body h5 text-center">繼續前往商品頁面選購</div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-secondary py-2 px-3" data-dismiss="modal">取消</button>
            <button type="button" class="btn btnChoco py-2 px-3" @click.prevent="goToProducts">前往</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from "./HomeComponents/Header";
import HomeFooter from "./HomeComponents/HomeFooter";
import $ from "jquery";

export default {
  data() {
    return {
      orderId: "",
      order: {
        user: {}
      }
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    getOrder() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/order/${vm.orderId}`;
      vm.$http.get(api).then(response => {
        vm.order = response.data.order;
      });
    },
    payOrder() {
      this.$store.dispatch("pushLoadingStatu", true);
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/pay/${vm.orderId}`;
      vm.$http.post(api).then(response => {
        if (response.data.success) {
          vm.getOrder();
          vm.paySuccess();
        } else {
          alert(response.data.message);
          vm.getOrder();
        }
        this.$store.dispatch("pushLoadingStatu", false);
      });
    },
    paySuccess() {
      $("#paySuccess").modal("show");
    },
    goToProducts() {
      $("#paySuccess").modal("hide");
      this.$router.push("/products");
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  }
};
</script>