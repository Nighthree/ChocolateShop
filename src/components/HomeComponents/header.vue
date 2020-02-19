<template>
  <div class="sticky-top nav-border bg-white">
    <div class="container">
      <nav class="d-flex nav">
        <router-link to="/" class="text-Choco logo">
          最愛巧克力
          <span class="sr-only">(current)</span>
        </router-link>
        <div class="ml-auto d-flex align-items-center mr-sm-3 mr-1">
          <router-link to="/products" class="headerBtn">
            商品列表
            <span class="sr-only">(current)</span>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>
