<template>
  <div class="bg-lightChoco">
    <HomeHeader class="mb-5"></HomeHeader>
    <loading :active.sync="isLoading"></loading>
    <div class="minHeight">
      <h3 class="text-center text-Choco mb-3">確認訂購資料</h3>
      <div class="container mb-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <th>品名</th>
                <th>數量</th>
                <th class="text-right">單價</th>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-right h5 text-danger">總計</td>
                  <td class="text-right h5 text-danger">{{ order.total | currency }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="col-md-8">
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
                    <span v-else class="text-success">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-right" v-if="order.is_paid === false">
              <a class="btn btn-pay" @click.prevent="payOrder">確認付款去</a>
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
        } else {
          alert(response.data.message);
          vm.getOrder();
        }
        this.$store.dispatch("pushLoadingStatu", false);
      });
    }
  },
  computed:{
    isLoading(){
      return this.$store.state.status.isLoading;
    },
    cart() {
      return this.$store.state.cart;
    },
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