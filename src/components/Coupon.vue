<template>
  <div>
    <HomeHeader></HomeHeader>
    <section class="couponMinHeight d-flex align-items-center">
      <div class="position-relative">
        <img class="img-fluid" src="../assets/images/888.jpg" alt />
        <a
          href="#"
          class="btn btnChoco btnCouBorder px-5 position-absolute"
          style="bottom:20px;left:50%;transform:translateX(-50%)"
          data-toggle="modal"
          data-target="#couponModalCenter"
        >我要參加！</a>
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
          <div class="modal-body">
            <label class="h2 text-center d-block" for="couponText">
              輸入「
              <span class="font-weight-bold text-Choco">最愛巧克力</span>」
              <br />取得優惠碼
            </label>
            <input type="text" v-model="couponText" id="couponText" class="couponText" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary py-2 px-3" data-dismiss="modal">取消</button>
            <button type="button" class="btn btnChoco py-2 px-3" @click.prevent="checkCoupon">取得優惠碼</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from "./HomeComponents/Header";
import HomeFooter from "./HomeComponents/HomeFooter";
import $ from "jquery";

export default {
  data() {
    return {
      couponText: "",
      couponCode: "888"
    };
  },
  methods: {
    checkCoupon() {
      const vm = this;
      if (vm.couponText == "最愛巧克力") {
        $("#couponModalCenter").modal("hide");
        alert("取得優惠碼：888");
      } else {
        $("#couponModalCenter").modal("hide");
        alert("輸入錯誤");
      }
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>


