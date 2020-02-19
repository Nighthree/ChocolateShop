<template>
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
            class="d-block w-100 bg-cover bannerHeight"
            alt
            style="background-image:url(https://vanillaknight.com/shop/pics/20180215/1518667878.jpg)"
          />
          <div class="carousel-caption bg-op6 px-4">
            <h5>全館 6 折</h5>
            <p class="carouselPSize">輸入折扣碼 666 即享購物車 6 折優惠</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src
            class="d-block w-100 bg-cover bannerHeight"
            alt
            style="background-image:url(https://vanillaknight.com/media/pics/20190814/1565775858.jpg)"
          />
          <div class="carousel-caption bg-op6 px-4">
            <h5>全館 6 折</h5>
            <p class="carouselPSize">輸入折扣碼 666 即享購物車 6 折優惠</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src
            class="d-block w-100 bg-cover bannerHeight"
            alt
            style="background-image:url(https://vanillaknight.com/media/pics/20200102/1577952582.jpg)"
          />
          <div class="carousel-caption bg-op6 px-4">
            <h5>全館 6 折</h5>
            <p class="carouselPSize">輸入折扣碼 666 即享購物車 6 折優惠</p>
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

</template>
<script>
export default {};
</script>

<style lang="scss">
.bannerHeight {
  @media (min-width: 768px) {
    height: 60vh;
  }
  height: 250px;
}
</style>