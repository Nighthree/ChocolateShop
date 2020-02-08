<template>
  <div class="bg-lightChoco">
    <HomeHeader class="mb-5"></HomeHeader>
    <loading :active.sync="isLoading"></loading>
    <h3 class="text-center text-Choco">填寫訂購資料</h3>
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-12">
          <form @submit.prevent="createCustomOrder">
            <div class="form-group">
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

            <div class="form-group">
              <label for="name">收件人姓名</label>
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
              <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
            </div>

            <div class="form-group">
              <label for="telphone">收件人電話</label>
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
              <span class="text-danger" v-if="errors.has('telphone')">電話必須輸入</span>
            </div>

            <div class="form-group">
              <label for="adderss">收件人地址</label>
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
              <span class="text-danger" v-if="errors.has('address')">地址必須輸入</span>
            </div>

            <div class="form-group">
              <label for="textarea">留言</label>
              <textarea
                class="form-control"
                id="textarea"
                name="message"
                rows="3"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn checkBtn">送出</button>
            </div>
            
          </form>

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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
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
            console.log("訂單建立", response.data);

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
    },
  }
};
</script>