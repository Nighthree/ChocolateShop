<template>
  <div class="bg-lightChoco">
    <nav class="navbar navbar-expand-md navbar-light container">
      <router-link to class="nav-link text-Choco logo">
        最愛巧克力
        <span class="sr-only">(current)</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-2">
            <router-link to class="nav-link rounded-lg chocoText">
              首頁
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/login" class="nav-link rounded-lg chocoText">
              會員登入
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item dropdown mx-2">
            <a
              class="nav-link dropdown-toggle rounded-lg chocoText"
              :class="{'active': cartActive }"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click.prevent="cartOnOff()"
            >
              <i class="fas fa-shopping-cart">
                <span class="badge badge-pill badge-danger">Danger</span>
              </i>
            </a>
            <div class="dropdown-menu dropdown-menu-right px-2" aria-labelledby="navbarDropdown">
              <h6 style="font-size: 12px;">已選擇商品</h6>
              <table class="table" style="width: 250px">
                <thead class="d-none">
                  <tr>
                    <th scope="col">刪除</th>
                    <th scope="col">品項</th>
                    <th scope="col">數量</th>
                    <th scope="col">金額</th>
                  </tr>
                </thead>
                <tr>
                  <th scope="row">
                    <i class="far fa-trash-alt"></i>
                  </th>
                  <th>金牌西裝</th>
                  <th>1件</th>
                  <th>$520</th>
                </tr>
                <tr>
                  <th scope="row">
                    <i class="far fa-trash-alt"></i>
                  </th>
                  <th>金牌女裝</th>
                  <th>1件</th>
                  <th>$480</th>
                </tr>
              </table>
              <a href class="btn btn-primary d-block">結帳去</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="text-right my-4">
      <button class="btn btn-primary" @click.prevent="getCart()">header取得資料</button>
    </div>
    <pre>{{  }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartActive: false
    };
  },
  methods: {
    cartOnOff() {
      const vm = this;
      vm.cartActive = !vm.cartActive;
    },
    getCart() {
      this.$store.dispatch("getCart");
      console.log(this.cart);
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  created() {
    const vm = this;
    vm.getCart();
  }
};
</script>

<style scoped>
nav {
  border-bottom: 2px solid rgb(206, 198, 198);
}
</style>