<template>
  <div class="bg-lightChoco">
    <div class="container">
      <div class="row">
        <div class="col-md-3 border-right">
          <button class="btn btn-primary" @click.prevent>測試的按鈕</button>
          <ul class="ulStyle">
            <li class="text-center productList">
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
  components: {
    ProductContent
  },
  computed: {
    categories() {
      return this.$store.state.status.categories;
    }
  }
};
</script>