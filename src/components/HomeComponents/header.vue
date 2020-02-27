<template>
  <div class="sticky-top nav-border bg-white">
    <div class="container">
      <nav class="d-flex nav">
        <router-link to="/" class="text-Choco logo">
          最愛巧克力
          <span class="sr-only">(current)</span>
        </router-link>
        <div class="ml-auto d-flex align-items-center mr-sm-3 mr-1">
          <router-link to="/about" class="headerBtn">
            關於我們
            <span class="sr-only">(current)</span>
          </router-link>
          <router-link to="/products" class="headerBtn">
            商品列表
            <span class="sr-only">(current)</span>
          </router-link>
          <router-link to="/know" class="headerBtn">
            巧克力的益處
            <span class="sr-only">(current)</span>
          </router-link>
          <router-link to="/coupon" class="headerBtn">
            開幕慶活動
            <span class="sr-only">(current)</span>
          </router-link>
        </div>
      </nav>
    </div>
    <a
      href="#"
      @click.prevent="scrollTop"
      class="scrolltop d-flex justify-content-center align-items-center"
    >
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  created() {
    this.scrollTop();
  }
};
</script>
