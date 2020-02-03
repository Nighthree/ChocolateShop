<template>
  <div class="bg-lightChoco py-4 pt-md-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <ul class="ulStyle">
            <li class="text-center productList" :class="{ 'active': searchText == ''}">
              <a
                href="#"
                class="d-block text-decoration-none py-2"
                @click.prevent="getSearchText(item = '')"
              >全部商品</a>
            </li>
            <li
              class="text-center productList"
              v-for="item in categories"
              :key="item"
              :class="{ 'active': searchText == item }"
            >
              <a href="#" class="d-block text-decoration-none py-2"
              @click.prevent="getSearchText(item)">{{ item }}</a>
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
      categories: "",
      searchText: ""
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
        vm.categories = Array.from(new Set(categoryItem));
      });
    },
    getSearchText(item) {
      this.searchText = item;
      this.$store.dispatch("getSearchText", item);
    },
  },
  created() {
    this.getCategories();
  }
};
</script>