<template>
  <div class="bg-lightChoco">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <button class="btn btn-primary" @click.prevent>測試的按鈕</button>
        </div>
        <div class="col-md-9">
          <ProductContent></ProductContent>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductContent from './ProductPages/ProductContent';

export default {
  components:{
    ProductContent,
  }
};
</script>