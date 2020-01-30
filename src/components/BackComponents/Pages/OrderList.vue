<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right my-4">
      <button class="btn btn-primary" @click="getOrderList" title="如果沒有資料請點選重新讀取">取得訂單列表</button>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>購買時間</th>
            <th>Email</th>
            <th>購買項目</th>
            <th class="text-center">應付金額</th>
            <th class="text-center">是否付款</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <th>{{ new Date(item.create_at*1000).getFullYear()}} / {{new Date(item.create_at*1000).getMonth() + 1 }} / {{new Date(item.create_at*1000).getDate() }}</th>
            <td>{{ item.user.email }}</td>
            <td>
              <span
                v-for="(product, i) in item.products"
                :key="i"
              >{{ product.product.title }} {{ product.qty }}/{{ product.product.unit }}<br /></span>
            </td>
            <td class="text-right">{{ item.total | currency}}</td>
            <td class="text-success text-center" v-if="item.is_paid">完成付款</td>
            <td class="text-center" v-else>尚未付款</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <Pagination :pagenation="paginations" @changeCurrPage="getOrderList"></Pagination> -->

  </div>
</template>
<script>
import $ from "jquery";
import Pagination from "./Pagination";

export default {
  data() {
    return {
      isLoading: false,
      paginations: {},
      orders: [],
    };
  },
  methods: {
    getOrderList(page = 1) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/orders?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        if (response.data.success) {
          console.log(response.data);
          vm.orders = response.data.orders;
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.getOrderList();
  }
};
</script>