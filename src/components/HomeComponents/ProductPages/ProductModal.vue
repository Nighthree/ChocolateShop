<template>
  <div>
    <!-- 查看更多Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productModalTitle">{{ cardProps.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="cardProps.imageUrl" class="img-fluid" alt />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ cardProps.content }}</p>
              <footer class="blockquote-footer text-right">{{ cardProps.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!cardProps.price">{{ cardProps.origin_price }} 元</div>
              <del class="h6" v-if="cardProps.price">原價 {{ cardProps.origin_price }} 元</del>
              <div class="h4" v-if="cardProps.price">網路優惠價 {{ cardProps.price }} 元</div>
            </div>
            <select name class="form-control mt-3" v-model="cardProps.num">
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{cardProps.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{ cardProps.num * cardProps.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary" @click="addCart(cardProps.id, cardProps.num)">
              <i class="fas fa-spinner fa-spin" v-if="addCartLoading == cardProps.id"></i>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    cardProps:{},
    watchMore:'',
    addCart:'',
  },
  methods: {
    cardMethod(cardProps){
      this.$emit('cardMethod', cardProps)
    },
    addToCart(id) {
      this.$emit('addToCart_emit', id)
    }
  },
};
</script>