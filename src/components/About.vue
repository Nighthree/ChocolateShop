<template>
  <div>
    <HomeHeader></HomeHeader>

    <section class="container py-5 textStyle" data-aos="fade-up" data-aos-duration="800">
      <h1 class="mb-5 text-Choco">我們的故事</h1>
      <h5 class="text-secondary chocoline">我們是誰？</h5>
      <p class="text-secondary">我們是喜愛巧克力的她和他。</p>
    </section>
    <section class="container py-5" data-aos="fade-up" data-aos-duration="800">
      <div class="row">
        <div class="col-md-6 col-12 textStyle">
          <h5 class="text-secondary chocoline pb-4">她的故事</h5>
          <h6 class="text-secondary pb-4">這是一個獨自旅行的故事。</h6>
          <p
            class="text-secondary pb-4"
          >一位台灣女生自助旅行來到了啤酒巧克力鬆餅世界聞名的比利時，原本就熱愛料理的她，嘗試了各式各樣的比利時巧克力，那種滋味驚為天人。</p>
          <p class="text-secondary pb-4">高檔的巧克力，論香氣和口感都是上乘上，在這裡她萌生了迫不及待想要把這美麗的滋味分享給家人，分享給她的好朋友們。</p>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center p-4">
          <img
            class="img-fluid rounded"
            src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2018/11/about-img-2.png"
            alt
          />
        </div>
      </div>
    </section>
    <section class="container py-5" data-aos="fade-up" data-aos-duration="800">
      <div class="row flex-row flex-md-row-reverse">
        <div class="col-md-6 col-12 textStyle">
          <h5 class="text-secondary chocoline pb-4">他的故事</h5>
          <p
            class="text-secondary pb-4"
          >小男孩在家裡，到處翻找他的寶藏，他的巧克力兔子和巧克力復活節彩蛋。今天是復活節，是個孩子的節日，家長們忙著藏巧克力兔子和彩蛋，好讓孩子在這個復活節假期不會無聊。</p>
          <p class="text-secondary pb-4">啊！找到了！</p>
          <p class="text-secondary pb-4">媽媽竟然把巧克力彩蛋藏在庭院的盆摘裡。</p>
          <p class="text-secondary pb-4">慢慢地撥開彩紙，小心翼翼的把巧克力送到嘴裡，這是他第一次吃巧克力。</p>
          <p class="text-secondary pb-4">巧克力的香濃，融在嘴裡的甜蜜，讓小男孩立刻愛上了這款滋味，也為了未來尋找好吃的巧克力在心裡種下小小的種子。</p>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center p-4">
          <img
            class="img-fluid rounded"
            src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2018/11/about-img-3.png"
            alt
          />
        </div>
      </div>
    </section>
    <section class="container" data-aos="fade-up" data-aos-duration="800">
      <div class="row justify-content-around">
        <div class="col-md-4 col-12 mb-5">
          <h5 class="text-secondary chocoline pb-4">我們的任務</h5>
          <p class="text-secondary pl-3">
            在這個巧克力大國裡
            <br />為您尋找最美味的巧克力
            <br />甚至新奇有趣的巧克力
            <br />只想帶給您不一樣的感官享受
          </p>
        </div>
        <div class="col-md-4 col-12 mb-5">
          <h5 class="text-secondary chocoline pb-4">我們的堅持</h5>
          <p class="text-secondary pl-3">
            堅持給您最優良品質的巧克力
            <br />堅持手工製作
            <br />堅持100% Made in Taiwan
            <br />堅持冷藏運輸新鮮到家
          </p>
        </div>
      </div>
    </section>
    <section class="position-relative" data-aos="fade-up" data-aos-duration="800">
      <img
        class="img-fluid"
        src="https://s3-ap-northeast-1.amazonaws.com/lacabosse.com.tw/wp-content/uploads/2018/11/about-full-img-2.jpg"
        alt
      />
      <router-link
        to="/products"
        class="btn btnChoco px-5"
        style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%)"
      >
        精選巧克力
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </section>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
import HomeHeader from "./HomeComponents/Header";
import HomeFooter from "./HomeComponents/HomeFooter";

export default {
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>