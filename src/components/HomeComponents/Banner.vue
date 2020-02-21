<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" style="z-index:0">
        <router-link to="/products" class="goProducts">立刻選購</router-link>
        <img
          src
          class="d-block w-100 bg-cover bannerHeight"
          alt
          style="background-image:url(https://vanillaknight.com/media/pics/20200102/1577952582.jpg)"
        />
        <div class="carousel-caption bg-op6 p-2 p-md-4">
          <h5>全館 8 折</h5>
          <p class="carouselPSize mb-2">輸入折扣碼 888 即享購物車 8 折優惠</p>
        </div>
      </div>
      <div class="carousel-item" style="z-index:0">
        <router-link to="/products" class="goProducts">立刻選購</router-link>
        <img
          src
          class="d-block w-100 bg-cover bannerHeight"
          alt
          style="background-image:url(https://vanillaknight.com/media/pics/20190814/1565775858.jpg)"
        />
        <div class="carousel-caption bg-op6 p-2 px-md-4 py-md-4">
          <h5>全館 6 折</h5>
          <p class="carouselPSize mb-2">輸入折扣碼 666 即享購物車 6 折優惠</p>
        </div>
      </div>
      <div class="carousel-item" style="z-index:0">
        <router-link to="/products" class="goProducts">立刻選購</router-link>
        <img
          src
          class="d-block w-100 bg-cover bannerHeight"
          alt
          style="background-image:url(https://vanillaknight.com/shop/pics/20180215/1518667878.jpg)"
        />
        <div class="carousel-caption bg-op6 p-2 px-md-4 py-md-4">
          <h5>全館 6 折</h5>
          <p class="carouselPSize mb-2">輸入折扣碼 666 即享購物車 6 折優惠</p>
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
