<template>
  <div class="bg-lightChoco">
    <HomeHeader class="mb-5"></HomeHeader>
    <loading :active.sync="isLoading"></loading>

    <!-- 分隔 -->

    <section class="container px-0 px-md-3 mb-5">
      <div class="row no-gutters">
        <div class="col-lg-8 px-md-3">
          <form class="bg-Choco text-lightChoco" @submit.prevent="createCustomOrder">
            <div class="p-4">
              <h2 class="h1 text-yellowChoco">運送</h2>
              <div class="form-row">
                <div class="form-group col-12">
                  <label for="email" class="h4">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="請輸入 Email"
                    v-model="form.user.email"
                    v-validate="'required|email'"
                    :class="{'is-invalid': errors.has('email')}"
                  />
                  <span class="text-info" v-if="errors.has('email')">{{ errors.first('email') }}</span>
                </div>
                <div class="form-group col-12">
                  <label for="name" class="h4">姓名</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="請輸入姓名"
                    v-model="form.user.name"
                    v-validate="'required'"
                    :class="{'is-invalid': errors.has('name')}"
                  />
                  <span class="text-info" v-if="errors.has('name')">姓名必須輸入正確</span>
                </div>
                <div class="form-group col-12">
                  <label for="telphone" class="h4">電話</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="telphone"
                    name="telphone"
                    placeholder="請輸入電話"
                    v-model="form.user.tel"
                    v-validate="'required'"
                    :class="{'is-invalid': errors.has('telphone')}"
                  />
                  <span class="text-info" v-if="errors.has('telphone')">電話必須輸入正確</span>
                </div>
                <div class="form-group col-12">
                  <label for="address" class="h4">地址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    name="address"
                    placeholder="請輸入地址"
                    v-model="form.user.address"
                    v-validate="'required'"
                    :class="{'is-invalid': errors.has('address')}"
                  />
                  <span class="text-info" v-if="errors.has('address')">地址必須輸入正確</span>
                </div>
                <div class="form-group col-12">
                  <label for="textarea" class="h4">留言</label>
                  <textarea
                    class="form-control"
                    id="textarea"
                    name="message"
                    rows="3"
                    v-model="form.message"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btnChoco btn-lg font-weight-bold rounded-0 w-100">下一步</button>
          </form>
        </div>

        <div class="col-lg-4 d-none d-lg-block px-md-3">
          <div class="card text-secondary mb-5">
            <h3 class="card-header bg-light mb-0 p-3 text-center">訂單摘要</h3>
            <div class="card-body">
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
          </div>

          <div class="card text-secondary">
            <h3 class="card-header bg-light mb-0 p-3 text-center">購物清單</h3>
            <div class="card-body pb-0">
              <div class="d-flex mb-4" v-for="item in cart.carts" :key="item.id">
                <div
                  class="cart-image bg-cover"
                  :style="{backgroundImage: `url(${ item.product.imageUrl })`}"
                ></div>
                <div class="align-self-center pl-2">
                  <span>{{ item.product.title }} ({{item.qty}})</span>
                  <br />
                  <span class="h5">{{ item.product.price * item.qty | currency}}</span>
                </div>
              </div>
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
import HomeFooter from "./HomeComponents/HomeFooter";

export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
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
    createCustomOrder() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/order`;
      this.$validator.validate().then(valid => {
        if (valid) {
          vm.$http.post(api, { data: vm.form }).then(response => {
            if (response.data.success) {
              vm.$router.push(`/checkout/${response.data.orderId}`);
            }
            vm.getCart();
          });
        } else {
          alert("欄位不完整");
        }
      });
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    isLoading() {
      return this.$store.state.status.isLoading;
    }
  }
};
</script>