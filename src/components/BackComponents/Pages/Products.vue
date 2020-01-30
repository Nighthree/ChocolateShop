<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right my-4">
      <button class="btn btn-primary" @click="OpenModel(true)">建立新的產品</button>
    </div>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th class="d-none d-sm-table-cell w120px">產品分類</th>
            <th>產品名稱</th>
            <th class="text-right w100px">原價</th>
            <th class="text-right w100px">售價</th>
            <th class="text-center w80px">單位</th>
            <th class="text-center w100px">啟用狀態</th>
            <th class="text-center">編輯&刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <th class="d-none d-sm-table-cell">{{ item.category }}</th>
            <td>{{ item.title }}</td>
            <td class="text-right">{{ item.origin_price | currency }}</td>
            <td class="text-right">{{ item.price | currency }}</td>
            <td class="text-center">{{ item.unit }}</td>
            <td class="text-center">
              <div v-if="item.is_enabled" class="text-success">啟用中</div>
              <div v-else>未啟用</div>
            </td>
            <td class="text-center">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-primary" @click="OpenModel(false, item)"><span class="d-md-block d-none">編輯</span><i class="fas fa-edit d-block d-md-none"></i></button>
                <button class="btn btn-outline-danger" @click="OpenDeleteModal(item)"><span class="d-md-block d-none">刪除</span><i class="fas fa-trash-alt d-block d-md-none"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination :pagenation="paginations" @changeCurrPage="getProducts"></Pagination>

    <!-- 新增&編輯產品的 Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>{{ modalTitle }}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="temProduct.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="imgLoading"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadImg"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt
                  :src="temProduct.imageUrl"
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="temProduct.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="temProduct.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="temProduct.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="temProduct.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="temProduct.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="temProduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="temProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="temProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updataProduct">確認</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除產品的modal -->
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ temProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
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
      products: [],
      temProduct: {},
      isNew: false,
      modalTitle: "",
      isLoading: false,
      imgLoading: false,
      paginations: {}
    };
  },
  components: {
    Pagination
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
        vm.isLoading = false;
        vm.paginations = response.data.pagination;
      });
    },
    OpenModel(isNew, item) {
      if (isNew) {
        this.temProduct = {};
        this.isNew = true;
        this.modalTitle = "新增產品";
      } else {
        this.temProduct = Object.assign({}, item);
        this.isNew = false;
        this.modalTitle = "編輯產品";
      }
      $("#productModal").modal("show");
    },
    updataProduct() {
      let api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/product`;
      const vm = this;
      let httpMethod = "post";
      if (!vm.isNew) {
        api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/product/${vm.temProduct.id}`;
        httpMethod = "put";
      }
      this.$http[httpMethod](api, { data: vm.temProduct }).then(response => {
        if (response.data.success) {
          vm.$bus.$emit("message:push", vm.modalTitle + "成功", "success");
          vm.getProducts();
          $("#productModal").modal("hide");
        } else {
          vm.$bus.$emit("message:push", response.data.message, "danger");
          vm.getProducts();
          $("#productModal").modal("hide");
        }
      });
    },
    OpenDeleteModal(item) {
      $("#delProductModal").modal("show");
      const vm = this;
      vm.temProduct = item;
    },
    delProduct() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/product/${vm.temProduct.id}`;
      vm.$http.delete(api).then(response => {
        if (response.data.success) {
          vm.$bus.$emit("message:push", "刪除產品成功", "success");
        } else {
          vm.$bus.$emit("message:push", response.data.message, "danger");
        }
        vm.getProducts();
        $("#delProductModal").modal("hide");
      });
    },
    uploadImg() {
      const vm = this;
      vm.imgLoading = true;
      const uploadFile = vm.$refs.files.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadFile);
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/upload`;
      vm.$http
        .post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.success) {
            vm.$set(vm.temProduct, "imageUrl", response.data.imageUrl);
            vm.imgLoading = false;
            vm.$bus.$emit("message:push", "圖片上傳成功", "success");
          } else {
            vm.imgLoading = false;
            vm.$bus.$emit("message:push", response.data.message, "danger");
          }
        });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>