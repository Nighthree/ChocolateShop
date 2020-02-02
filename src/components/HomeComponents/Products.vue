<template>
  <div class="bg-lightChoco">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <button class="btn btn-primary" @click.prevent>測試的按鈕</button>
          <ul class="ulStyle">
            <li class="text-center productList active">
              <a href="#" class="d-block text-decoration-none py-2">全部商品</a>
            </li>
            <li class="text-center productList" v-for="item in categories" :key="item">
              <a href="#" class="d-block text-decoration-none py-2">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <ProductContent></ProductContent>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductContent from "./ProductContent";

export default {
  data() {
    return {
      categories: '',
    };
  },
  components: {
    ProductContent
  },
  methods: {
    getCategories() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products/all`;
      vm.$http.get(api).then(response => {
        const categoryItem = [];
        response.data.products.forEach(function(item) {
          categoryItem.push(item.category);
        });
        vm.categories = Array.from(new Set(categoryItem)).reverse();
      });
    },
  },
  created() {
    this.getCategories();
  },
};
</script>