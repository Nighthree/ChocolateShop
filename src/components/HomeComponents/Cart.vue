<template>
  <div class="fixedCart">
    <div class="dropdown d-flex align-items-center">
      <a
        class="dropdown-toggle btnCart d-flex justify-content-center align-items-center"
        href="#"
        type="button"
        id="Dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-shopping-cart fa-2x"></i>
        <span class="badge badge-pill badge-danger">{{ cart.carts.length }}</span>
      </a>
      <div
        class="dropdown-menu dropdown-menu-right px-2"
        aria-labelledby="Dropdown"
        style="width:300px; z-index:20"
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
                <th class="px-1" scope="row">
                  <a class="d-block text-center" href="#" @click.prevent="delCart(item.id)">
                    <i class="far fa-trash-alt text-danger"></i>
                  </a>
                </th>
                <td class="px-1">{{ item.product.title }}</td>
                <td class="text-right px-1">{{ item.qty }} {{item.product.unit}}</td>
                <td class="text-right px-1">{{ item.total | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right px-1">總計</td>
                <td class="text-right px-1">{{ cart.total | currency }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <router-link to="/Order" class="btn btnChoco d-block" v-if="cart.total !== 0">結帳去</router-link>
      </div>
    </div>
  </div>
</template>
<script>
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
    }
  },
  created() {
    this.getCart();
  }
};
</script>