<template>
  <div>
    <HomeHeader class="mb-5"></HomeHeader>
    <loading :active.sync="isLoading"></loading>
    <div v-if="cart.total == 0 " class="minHeight d-flex justify-content-center align-items-center">
      <router-link
        to="/products"
        class="btn btnChoco rounded p-5"
        title="回到商品頁面"
        style="font-size:22px"
      >
        購物車還空空的喔！
        <br />趕快去選購吧！
      </router-link>
    </div>

    <div class="minHeight" v-else>
      <div class="container">
        <ul class="row ulStyle justify-content-md-around">
          <li class="col-md-3 col-12 checkStep active text-center mb-3">1.填寫訂購資料</li>
          <li class="col-md-3 col-12 checkStep text-center mb-3">2.金流付款</li>
          <li class="col-md-3 col-12 checkStep text-center mb-3">3.完成！</li>
        </ul>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12">
            <h2 class="text-Choco font-weight-bold h4 text-center py-3 mb-0">
              <img
                src="https://raw.githubusercontent.com/Nighthree/ChocolateShop/master/src/assets/images/chocolate_icon.png"
                style="height:30px"
              />訂購資訊
            </h2>
            <div class="table-responsive">
              <table class="table table-hover text-Choco">
                <thead>
                  <tr>
                    <th class="text-center d-none d-sm-table-cell"></th>
                    <th>品項</th>
                    <th class="text-right">單價</th>
                    <th class="text-right">數量</th>
                    <th class="text-right">總計</th>
                    <th class="text-center">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartData.carts" :key="item.id">
                    <td class="text-center align-middle d-none d-sm-table-cell">
                      <a href="#" @click.prevent="createProduct(item.product.id)" title="前往商品介紹">
                        <img :src="item.product.imageUrl" alt style="height:50px;" />
                      </a>
                    </td>
                    <td class="align-middle">
                      <a
                        href="#"
                        class="text-Choco"
                        @click.prevent="createProduct(item.product.id)"
                        title="前往商品介紹"
                      >{{ item.product.title }}</a>
                      <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                    </td>
                    <td class="text-right align-middle">{{ item.product.price | currency }}</td>
                    <td class="text-right align-middle">
                      <select
                        v-model="item.qty"
                        @change="changeQty(item.id, item.product.id, item.qty)"
                      >
                        <option :value="num" v-for="num in 10" :key="num">{{ num }}</option>
                      </select>
                      {{ item.product.unit }}
                    </td>
                    <td
                      class="text-right align-middle"
                    >{{ item.qty * item.product.price | currency }}</td>
                    <td class="text-center align-middle">
                      <a href="#" class="btn btn-outline-danger" @click.prevent="delCart(item.id)">
                        <i class="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-right">
              <p class="h5" v-if="cart.total == cart.final_total">
                總計：
                <span class="text-danger">{{ cart.total | currency }}</span> 元
              </p>
              <p
                class="text-secondary"
                v-if="cart.total !== cart.final_total"
              >折扣前總計：{{ cart.total | currency }} 元</p>
              <p class="h5" v-if="cart.final_total !== cart.total">
                折扣後總計：
                <span class="text-danger">{{ cart.final_total | currency }}</span> 元
              </p>

              <div class="input-group my-md-3 mt-3 mb-4 input-group-sm">
                <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode" />
                <div class="input-group-append">
                  <a class="btn checkCoupon" @click.prevent="checkCouponCode">套用優惠碼</a>
                </div>
              </div>
              <div class="d-md-flex justify-content-end">
                <router-link to="/products" class="toProducts font-weight-bold mb-3" title="前往商品頁面">
                  <i class="fas fa-arrow-left"></i> 繼續選購商品
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-10 col-12 text-Choco mb-5">
            <h2 class="font-weight-bold h4 text-center py-3 mb-0">
              <img
                src="https://raw.githubusercontent.com/Nighthree/ChocolateShop/master/src/assets/images/chocolate_icon.png"
                style="height:30px"
              />填寫訂購資料
            </h2>
            <form class="form-row justify-content-end" @submit.prevent="createCustomOrder">
              <div class="form-group col-12">
                <label for="email">Email</label>
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
                <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
              </div>

              <div class="form-group col-12">
                <label for="name">姓名</label>
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
                <span class="text-danger" v-if="errors.has('name')">姓名必須輸入正確</span>
              </div>

              <div class="form-group col-12">
                <label for="telphone">電話</label>
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
                <span class="text-danger" v-if="errors.has('telphone')">電話必須輸入正確</span>
              </div>

              <div class="form-group col-12">
                <label for="address">地址</label>
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
                <span class="text-danger" v-if="errors.has('address')">地址必須輸入正確</span>
              </div>

              <div class="form-group col-12">
                <label for="textarea">留言</label>
                <textarea
                  class="form-control"
                  id="textarea"
                  name="message"
                  rows="3"
                  v-model="form.message"
                  placeholder="有什麼話想告訴我們？"
                ></textarea>
              </div>
              <button type="submit" class="btn btnChoco px-4">建立訂單</button>
            </form>
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
      couponCode: "",
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
          vm.getCart();
        }
      });
    },
    changeQty(id, productId, qty) {
      const vm = this;
      vm.$store.dispatch("pushLoadingStatu", true);
      const delAPI = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart/${id}`;
      const addAPI = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      const changeCart = {
        product_id: productId,
        qty: qty
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
    },
    createProduct(id) {
      this.$router.push(`/product/${id}`);
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
      const data = JSON.parse(JSON.stringify(this.cart));
      return data;
      //直接利用option改變數量會使cart的qty被重新賦予
      //因為從Vuex導過來的數值用直接賦予的方式雖然一樣可以進行但會跳錯
      //所以重新製造一個一樣的資料
      //又因為物件傳參考的特性所以要用深層複製的方式
    }
  },
  created() {
    this.getCart();
  }
};
</script>