<template>
  <div>
    <HomeHeader></HomeHeader>

    <section class="container py-5 textStyle">
      <div class="row justify-content-center">
        <div class="col-md-9 col-12 mb-4" data-aos="fade-up" data-aos-duration="800">
          <div class="card">
            <img src="../assets/images/888.jpg" class="card-img-top" alt />
            <div class="card-body">
              <h5 class="card-title font-weight-bold text-Choco">開幕慶！輸入指定文字即享購物車 8 折優惠</h5>
              <p class="card-text text-secondary">店長瘋啦！為了吸引眼球居然祭出購物車 8 折優惠，趕快去參加活動，買好買滿！</p>
              <p class="text-right">
                <router-link to="/coupon">去參加</router-link>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-9 col-12 mb-4" data-aos="fade-up" data-aos-duration="800">
          <div class="card">
            <img
              src="https://bnextmedia.s3.hicloud.net.tw/image/album/2019-11/img-1574330638-63274@900.jpg"
              class="card-img-top"
              alt
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold text-Choco">台灣之光！「福灣巧克力」取得「世界巧克力大賽」「最佳黑巧克力獎」！</h5>
              <p
                class="card-text text-secondary"
              >有「巧克力界奧斯卡」之稱的「世界巧克力大賽」全球決賽 International Chocolate Awards (ICA)，18 日於瓜地馬拉舉辦頒獎典禮，來自台灣的「福灣巧克力」再創佳績，「台灣一號屏東黑巧克力62%」，奪得相當於奧斯卡最佳影片的最大獎「世界最佳黑巧克力」。</p>
              <p class="text-right">
                <a target="_blank" href="https://www.shoppingdesign.com.tw/post/view/4826">看更多</a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-9 col-12 mb-4" data-aos="fade-up" data-aos-duration="800">
          <div class="card">
            <img
              src="https://www.natgeomedia.com/wp-content/uploads/2018/11/02-chocolate-domestication-south-america.adapt_.1190.1.jpg"
              class="card-img-top"
              alt
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold text-Choco">震驚！巧克力的起源已被改寫！</h5>
              <p class="card-text text-secondary">一直以來，學者都認為可可豆大約是在4000年前於中美洲馴化，但最新研究有了更有趣的發現。</p>
              <p class="text-right">
                <a
                  target="_blank"
                  href="https://www.natgeomedia.com/environment/article/content-5244.html"
                >看更多</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container d-flex justify-content-end pb-5 pt-3">
      <router-link to="/products" class="btn btnChoco px-5">
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