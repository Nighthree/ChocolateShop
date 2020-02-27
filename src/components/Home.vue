<template>
  <div>
    <HomeHeader></HomeHeader>
    <loading :active.sync="isLoading"></loading>
    <Cart></Cart>
    <HomeBanner class="mb-3 mb-md-5"></HomeBanner>
    <section class="py-4 mb-5 container-fuild" data-aos="fade-up" data-aos-duration="800">
      <div class="row mx-0 flex-md-row flex-row-reverse">
        <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div class="d-flex justify-content-center d-sm-block">
            <h4 class="h1 mb-3 text-Choco font-weight-bold textStyle">
              Our
              <br />Chocolatier
            </h4>
          </div>
          <div class="d-flex justify-content-center d-sm-block">
            <p class="textStyle h5 text-secondary">
              由得獎無數的比利時巧克力工匠
              <br />遠從非洲迦納精挑細選巧克力原豆
              <br />在比利時溫控工作室手工細製
              <br />每一種口味 每一顆巧克力
              <br />堅持給客戶最好的品質
            </p>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center p-4">
          <img
            class="img-fluid rounded"
            src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2018/11/OurSupplier1-570x570.jpg"
            alt
          />
        </div>
      </div>
    </section>
    <section class="container mb-5" data-aos="fade-up" data-aos-duration="800">
      <h4 class="h1 mb-3 text-Choco font-weight-bold textStyle text-center">Our Promises</h4>
      <p class="textStyle h5 text-secondary text-center">
        堅持嚴選最好的巧克力工匠
        <br />全程手工製作 小量生產
        <br />堅持嚴選最佳風味巧克力
        <br />口味獨到 經典流傳
      </p>
      <div class="d-flex justify-content-center pb-5 pt-3">
        <router-link to="/about" class="btn btnChoco px-5">我們的故事</router-link>
      </div>
      <div class="row">
        <div class="col-md-4 text-center">
          <img
            class="mb-3"
            src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2019/03/handmade4.png"
            alt
          />
          <h6 class="h5">手工製作</h6>
          <p class="text-secondary">
            官方認證手工產品
            <br />從研磨 攪拌 調溫
            <br />每一個步驟都用愛心和細心
            <br />不做機器大量生產
            <br />每一顆巧克力都是用手小心呵護
          </p>
        </div>

        <div class="col-md-4 text-center">
          <img
            class="mb-3"
            src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2019/03/cold-shipping.png"
            alt
          />
          <h6 class="h5">冷藏運送</h6>
          <p class="text-secondary">
            從製造巧克力的溫控工作室
            <br />比利時到台灣的低溫空運
            <br />進而到台灣倉儲的15度C溫控倉儲
            <br />出貨只用黑貓冷藏運送到家
            <br />全程幫您保鮮到家
          </p>
        </div>

        <div class="col-md-4 text-center">
          <img
            class="mb-3"
            src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2019/03/Premium-quality1.png"
            alt
          />
          <h6 class="h5">優良品質</h6>
          <p class="text-secondary">
            從可可樹到巧克力豆
            <br />從非洲迦納監督採購
            <br />到烘培 發酵 研磨的製程
            <br />親自監度製作
            <br />符合最嚴格的章程
            <br />保證了巧克力的高品質
            <br />且昇華口味和香氣
          </p>
        </div>
      </div>
    </section>

    <section class="container pb-5" data-aos="fade-up" data-aos-duration="800">
      <div class="row flex-row flex-md-row-reverse">
        <div class="col-md-6 col-12 d-flex flex-column justify-content-between">
          <h4 class="h1 mb-3 text-Choco font-weight-bold">巧克力的益處</h4>
          <p class="text-secondary textStyle">你知道每天吃適量的黑巧克力(約28克)已被證實可以改善許多常見的慢性健康問題嗎？</p>
          <p
            class="text-secondary textStyle"
          >黑巧克力含有益健康的天然抗氧化劑成分(如黃酮類、多酚類和黃烷醇類)，還被證實可降低心臟病(Heart disease)風險和促進大腦的健康。</p>
          <div class="d-flex justify-content-end">
            <router-link to="/know" class=" p-3">
              看更多巧克力對身體的益處 <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center p-4">
          <img
            class="img-fluid rounded"
            src="https://cw1.tw/CW/images/article/C1384830828642.jpg"
            alt
          />
        </div>
      </div>
    </section>

    <section class="container" data-aos="fade-up" data-aos-duration="800">
      <h3 class="textStyle h1 mb-3 text-Choco font-weight-bold text-center">店長推薦</h3>
      <div class="row">
        <div class="col-md-4 col-12 mb-3" v-for="item in pushProducts" :key="item.id">
          <a class="card cardList" @click.stop.prevent="createProduct(item.id)">
            <div
              class="bg-cover cardImgHeight"
              :style="{backgroundImage: `url(${ item.imageUrl })`}"
            >
              <div class="glass d-flex justify-content-center">
                <span>點擊查看更多</span>
              </div>
            </div>
            <div class="card-body p-2 position-relative pb-4">
              <p class="mb-2 badge badge-secondary">{{ item.category }}</p>
              <h5 class="card-title font-weight-bold text-dark mb-1 text-center">{{ item.title }}</h5>
              <div
                class="h6 font-weight-bold text-danger text-center"
                v-if="!item.price"
              >{{ item.origin_price | currency }} 元</div>
              <div
                class="h6 font-weight-bold text-danger text-center"
                v-if="item.price"
              >{{ item.price | currency }} 元</div>
              <a href="#" title="加入購物車" class="addCart" @click.stop.prevent="addCart(item.id, 1)">
                <i class="fas fa-spinner fa-spin fa-lg" v-if="addCartLoading == item.id"></i>
                <i class="fas fa-cart-plus fa-lg" v-if="addCartLoading !== item.id"></i>
              </a>
            </div>
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-end pb-5 pt-3">
        <router-link to="/products" class="btn btnChoco px-5">
          其他精選巧克力
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </section>

    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./HomeComponents/Header";
import Cart from "./HomeComponents/Cart";
import HomeBanner from "./HomeComponents/Banner";
import HomeFooter from "./HomeComponents/HomeFooter";

export default {
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    createProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    isLoading() {
      return this.$store.state.status.isLoading;
    },
    addCartLoading() {
      return this.$store.state.status.addCartLoading;
    },
    pushProducts() {
      return this.products.filter(function(item) {
        return item.category == "精緻巧克力球";
      });
    }
  },
  components: {
    HomeHeader,
    Cart,
    HomeBanner,
    HomeFooter
  },
  created() {
    this.getProducts();
  }
};
</script>

