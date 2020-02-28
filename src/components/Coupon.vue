<template>
  <div>
    <HomeHeader></HomeHeader>
    <section class="couponMinHeight d-flex align-items-center">
      <div class="position-relative w-100">
        <img class="w-100" src="../assets/images/888.jpg" alt />
        <div class="d-flex justify-content-center py-3 py-md-0">
          <a
            href="#"
            class="btn btnChoco btnCou px-5"
            data-toggle="modal"
            data-target="#couponModalCenter"
            @click.prevent="couponCheck = '' , couponText =''"
          >我要參加！</a>
        </div>
      </div>
    </section>
    <HomeFooter></HomeFooter>

    <!-- 活動Modal -->
    <div
      class="modal fade"
      id="couponModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="couponModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="couponModal">輸入指定文字取得優惠碼</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="couponCheck === ''">
            <label class="h2 text-center d-block" for="couponText">
              輸入「
              <span class="font-weight-bold text-Choco">最愛巧克力</span>」
              <br />兌換優惠碼
            </label>
            <input type="text" v-model="couponText" id="couponText" class="couponText" />
          </div>
          <div class="modal-body" v-if="couponCheck === '最愛巧克力'">
            <p class="text-center h5">兌換成功！</p>
            <p class="text-center h5">
              恭喜你取得優惠碼「
              <span class="text-danger h3">{{ couponCode }}</span> 」
            </p>
            <p class="text-center h6">享購物車 8 折優惠！</p>
          </div>

          <div class="modal-body" v-if="couponCheck !== '最愛巧克力' && couponCheck !== ''">
            <label class="text-center h5 d-block" for="couponTextAgain">
              兌換失敗！
              <br />再輸入一次吧！
              <br />「
              <span class="font-weight-bold text-Choco">最愛巧克力</span>」
            </label>
            <input type="text" v-model="couponText" id="couponTextAgain" class="couponText" />
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary py-2 px-3" data-dismiss="modal">關閉</button>
            <button
              type="button"
              class="btn btnChoco py-2 px-3"
              @click.prevent="couponCheck = couponText"
              v-if="couponCheck !== '最愛巧克力'"
            >取得優惠碼</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from "./HomeComponents/Header";
import HomeFooter from "./HomeComponents/HomeFooter";

export default {
  data() {
    return {
      couponText: "",
      couponCheck: "",
      couponCode: "888"
    };
  },
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>


