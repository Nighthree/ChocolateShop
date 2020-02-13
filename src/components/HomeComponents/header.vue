<template>
  <div class="bg-lightChoco sticky-top nav-border">
    <div class="container">
      <nav class="d-flex nav">
        <router-link to="/" class="text-Choco logo">
          最愛巧克力
          <span class="sr-only">(current)</span>
        </router-link>
        <div class="ml-auto d-flex align-items-center mr-sm-3 mr-1">
          <router-link to="/customerlogin" class="headerBtn rounded-lg">
            會員登入
            <span class="sr-only">(current)</span>
          </router-link>
        </div>

        <div class="dropdown d-flex align-items-center">
          <a
            class="dropdown-toggle headerBtn rounded-lg"
            href="#"
            type="button"
            id="Dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart">
              <span class="badge badge-pill badge-danger">{{ cartLength }}</span>
            </i>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right px-2"
            aria-labelledby="Dropdown"
            style="width: 280px"
          >
            <div v-if="cart.total == 0">
              <p class="text-center py-3 mb-0">購物車還空空的喔！</p>
            </div>
            <div v-if="cart.total !== 0">
              <h6 style="font-size: 12px;">已選擇商品</h6>
              <table class="table">
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
            </div>
            <router-link to="/Cart" class="btn btn-primary d-block" v-if="cart.total !== 0">結帳去</router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    delCart(id) {
      this.$store.dispatch("delCart", id);
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartLength() {
      return this.$store.state.status.cartLength;
    }
  },
  created() {
    this.getCart();
  }
};
</script>
