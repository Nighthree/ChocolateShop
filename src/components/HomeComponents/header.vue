<template>
  <div class="sticky-top nav-border bg-white">
    <nav class="navbar navbar-expand-md navbar-white bg-white">
      <router-link to="/" class="text-Choco logo">
        最愛巧克力
        <span class="sr-only">(current)</span>
      </router-link>
      <button
        class="navbar-toggler border"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/news" class="nav-link headerBtn text-center">
              最新消息
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link headerBtn text-center">
            關於我們
            <span class="sr-only">(current)</span>
          </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link headerBtn text-center">
            商品列表
            <span class="sr-only">(current)</span>
          </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/know" class="nav-link headerBtn text-center">
            巧克力的益處
            <span class="sr-only">(current)</span>
          </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coupon" class="nav-link headerBtn text-center">
            開幕慶活動
            <span class="sr-only">(current)</span>
          </router-link>
          </li>
        </ul>
      </div>
    </nav>

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
