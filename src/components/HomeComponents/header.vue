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
            <router-link to class="nav-link rounded-lg chocoText d-block px-4">
              首頁
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/login" class="nav-link rounded-lg chocoText d-block px-3">
              會員登入
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item dropdown mx-2">
            <a
              class="nav-link dropdown-toggle rounded-lg chocoText px-4"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-shopping-cart">
                <span class="badge badge-pill badge-danger">{{ cartLength }}</span>
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
                <tbody style="font-size:14px">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <th scope="row">
                      <a href="#" @click.prevent="delCart(item.id)">
                        <i class="far fa-trash-alt text-danger"></i>
                      </a>
                    </th>
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.qty }}</td>
                    <td class="text-right">{{ item.total }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right">總計</td>
                    <td class="text-right">{{ cart.total }}</td>
                  </tr>
                </tfoot>
              </table>
              <a href class="btn btn-primary d-block">結帳去</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {
        carts: []
      }
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch("getCartLength");
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      this.$http.get(api).then(response => {
        this.cart = response.data.data;
      });
    },
    delCart(id) {
      this.$store.dispatch("delCart", id);
    }
  },
  computed: {
    cartLength() {
      this.getCart();
      return this.$store.state.cartLength;
    }
  },
  created() {
    this.getCart();
  }
};
</script>

<style scoped>
nav {
  border-bottom: 2px solid rgb(206, 198, 198);
}
</style>