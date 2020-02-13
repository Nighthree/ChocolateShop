<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right my-4">
      <button class="btn btn-primary" @click.prevent="getCoupon" title="如果沒有資料請點選重新讀取">取得優惠券資訊</button>
      <button class="btn btn-primary" @click.prevent="openCouponModal(true)">建立新的優惠券</button>
    </div>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>優惠名稱</th>
            <th>優惠百分比</th>
            <th class="text-center">啟用狀態</th>
            <th class="text-center">編輯&刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <th width="120px">{{ item.title }}</th>
            <td class="text-right" width="120px">{{ item.percent }}</td>
            <td class="text-center" width="100px">
              <div v-if="item.is_enabled">啟用中</div>
              <div v-else>未啟用</div>
            </td>
            <td class="text-center" width="200px">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-primary" @click.prevent="openCouponModal(false , item)"><span class="d-sm-block d-none">編輯</span><i class="fas fa-edit d-block d-sm-none"></i></button>
                <button
                  class="btn btn-outline-danger"
                  @click.prevent="openDeleteCouponModal(item)"
                ><span class="d-sm-block d-none">刪除</span><i class="fas fa-trash-alt d-block d-sm-none"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination :pagenation="paginations" @changeCurrPage="getCoupon"></Pagination>

    <!-- 新增&編輯優惠券的Modal -->

    <div
      class="modal fade"
      id="updataCoupon"
      tabindex="-1"
      role="dialog"
      aria-labelledby="updataCouponTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updataCouponTitle">{{ modalTitle }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="couponTitle">優惠名稱</label>
              <input
                type="text"
                class="form-control"
                id="couponTitle"
                placeholder="輸入優惠名稱"
                v-model="coupon.title"
              />
            </div>

            <div class="form-group">
              <label for="couponPercent">優惠百分比</label>
              <input
                type="number"
                class="form-control"
                id="couponPercent"
                placeholder="輸入優惠百分比"
                v-model="coupon.percent"
              />
            </div>

            <div class="form-group">
              <label for="couponCode">優惠代碼</label>
              <input
                type="number"
                class="form-control"
                id="couponCode"
                placeholder="輸入優惠代碼"
                v-model="coupon.code"
              />
            </div>

            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="couponIsEnabled"
                v-model="coupon.is_enabled"
                :true-value="1"
                :false-value="0"
              />
              <label class="form-check-label" for="couponIsEnabled">是否啟用</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click.prevent="updataCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除優惠券Modal -->
    <div
      class="modal fade"
      id="deleteCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteCouponModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="deleteCouponModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ coupon.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import Pagination from "./Pagination";

export default {
  data() {
    return {
      isNew: false,
      paginations: {},
      coupons: [],
      coupon: {},
      modalTitle: ""
    };
  },
  components: {
    Pagination
  },
  computed: {
    isLoading() {
      return this.$store.state.status.isLoading;
    }
  },
  methods: {
    openCouponModal(isNew, item) {
      const vm = this;
      if (isNew) {
        vm.isNew = true;
        vm.modalTitle = "新增優惠券";
        vm.coupon = {};
      } else {
        vm.isNew = false;
        vm.modalTitle = "編輯優惠券";
        vm.coupon = Object.assign({}, item);
      }
      $("#updataCoupon").modal("show");
    },
    openDeleteCouponModal(item) {
      $("#deleteCouponModal").modal("show");
      const vm = this;
      vm.coupon = item;
    },
    updataCoupon() {
      const vm = this;
      let api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/coupon`;
      let httpMethod = "post";
      if (!vm.isNew) {
        api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/coupon/${vm.coupon.id}`;
        httpMethod = "put";
      }
      vm.$http[httpMethod](api, { data: vm.coupon }).then(response => {
        if (response.data.success) {
          vm.$bus.$emit("message:push", vm.modalTitle + "成功", "success");
          vm.getCoupon();
          $("#updataCoupon").modal("hide");
        } else {
          vm.$bus.$emit("message:push", response.data.message, "danger");
          vm.getCoupon();
          $("#updataCoupon").modal("hide");
        }
      });
    },
    delCoupon() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/coupon/${vm.coupon.id}`;
      vm.$http.delete(api).then(response => {
        if (response.data.success) {
          vm.$bus.$emit("message:push", "刪除優惠券成功", "success");
        } else {
          vm.$bus.$emit("message:push", response.data.message, "danger");
        }
        $("#deleteCouponModal").modal("hide");
        vm.getCoupon();
      });
    },
    getCoupon(page = 1) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/coupons?page=${page}`;
      vm.$store.dispatch("pushLoadingStatu", true);
      vm.$http.get(api).then(response => {
        vm.coupons = response.data.coupons;
        vm.$store.dispatch("pushLoadingStatu", false);
      });
    }
  },
  created() {
    const vm = this;
    vm.getCoupon();
  }
};
</script>