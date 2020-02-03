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
      <!-- ul 和 購物車 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-2">
            <router-link to class="nav-link rounded-lg chocoText d-block px-4">
              首頁
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/customerlogin" class="nav-link rounded-lg chocoText d-block px-3">
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
      <!-- ul 和 購物車結束 -->
    </nav>
    <!-- 導覽列結束 -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src
            class="d-block w-100 bg-cover carousel-height"
            alt
            style="background-image:url(https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80)"
          />
          <div class="carousel-caption d-none d-md-block bg-op6 px-4">
            <h5>把關品質</h5>
            <p class="carouselPSize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src
            class="d-block w-100 bg-cover carousel-height"
            alt
            style="background-image:url(https://images.unsplash.com/photo-1542733083-dc82892e0427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1906&q=80)"
          />
          <div class="carousel-caption d-none d-md-block bg-op6 px-4">
            <h5>堅持手做</h5>
            <p class="carouselPSize">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src
            class="d-block w-100 bg-cover carousel-height"
            alt
            style="background-image:url(https://images.unsplash.com/photo-1567017627675-b7415a5c7f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)"
          />
          <div class="carousel-caption d-none d-md-block bg-op6 px-4">
            <h5>安心購買</h5>
            <p class="carouselPSize">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
