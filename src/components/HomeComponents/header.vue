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
              
            >
              <i class="fas fa-shopping-cart">
                <span class="badge badge-pill badge-danger">Danger</span>
              </i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
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
      cartActive: false,
      cart:[],
    };
  },
  methods: {
    cartOnOff() {
      const vm = this;
      vm.cartActive = !vm.cartActive;
    },
  },

};
</script>

<style scoped>
nav {
  border-bottom: 2px solid rgb(206, 198, 198);
}
</style>