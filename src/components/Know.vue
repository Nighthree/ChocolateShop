<template>
  <div>
    <HomeHeader></HomeHeader>

    <section class="container py-5 textStyle">
      <h1 class="text-Choco text-center font-weight-bold pb-4">巧克力對身體的益處</h1>
      <div class="row py-4" data-aos="fade-up" data-aos-duration="800">
        <div class="col-md-6 col-12">
          <h3 class="text-Choco chocoline mb-4">提升認知能力</h3>
          <p
            class="text-secondary"
          >可可豆含有黃烷醇（flavanol），有助於促進大腦的血液循環，活化腦部細胞。至於黃烷醇的含量與可可豆收成後的加工處理過程有關。若要達到活化腦部的功用，大約需要7公克富含黃烷醇的可可粉，或是3.5盎司的巧克力棒（可可成分至少佔70％以上）。</p>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center p-4">
          <img
            class="img-fluid rounded"
            src="https://s3-ap-southeast-1.amazonaws.com/cookeys.presslogic.com/wp-content/uploads/2019/11/%E9%BB%91%E5%B7%A7%E5%85%8B%E5%8A%9B%E5%90%AB%E8%B1%90%E5%AF%8C%E7%87%9F%E9%A4%8A%E3%80%82.jpg"
            alt
          />
        </div>
      </div>

      <div class="row flex-row flex-md-row-reverse py-4" data-aos="fade-up" data-aos-duration="800">
        <div class="col-md-6 col-12">
          <h3 class="text-Choco chocoline mb-4">降低心臟病風險</h3>
          <p
            class="text-secondary"
          >黑巧克力裡的黃烷醇，可降低血栓和中風(Stroke)的風險。某項針對470名年長男性的研究中，發現可可在15年內，降低受試者們平均50%心臟病死亡風險。另有研究表示，每週吃2次或更多次黑巧克力，可降低冠狀動脈鈣化32%的風險，吃超過5次，可降低57％罹患心臟病的風險。</p>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center p-4">
          <img
            class="img-fluid rounded"
            src="https://pic1.xuehuaimg.com/proxy/baijia/https://f11.baidu.com/it/u=3877024801,316563443&fm=173&app=25&f=JPEG?w=640&h=427&s=4708BB474C32229669099484030080E3&access=215967316"
            alt
          />
        </div>
      </div>

      <div class="row py-4" data-aos="fade-up" data-aos-duration="800">
        <div class="col-md-6 col-12">
          <h3 class="text-Choco chocoline mb-4">降血壓改善血液流動</h3>
          <p
            class="text-secondary"
          >許多對照研究表明，可可和黑巧克力都可幫助改善血液流動和降低血壓。黑巧克力中的黃烷醇，可刺激血管內產生一氧化氮，幫助向動脈發送信號使血管放鬆，降低血液流動的阻力，進而降低血壓。相反的，沒有黃酮類化合物的白巧克力，則無益健康。</p>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center p-4">
          <img
            class="img-fluid rounded"
            src="https://cw1.tw/CH/images/channel_master/25909240-ce2e-4b92-b755-b9e87e3a457f.jpg"
            alt
          />
        </div>
      </div>

      <div class="row flex-row flex-md-row-reverse py-4" data-aos="fade-up" data-aos-duration="800">
        <div class="col-md-6 col-12">
          <h3 class="text-Choco chocoline mb-4">提升好的膽固醇</h3>
          <p
            class="text-secondary"
          >可可豆中的可可脂是天然脂肪，雖然含很高的飽和脂肪酸，但不會影響血液中的膽固醇水準，研究發現還能提升高密度脂蛋白膽固醇(HDL，好的膽固醇)，並降低體內低密度脂蛋白膽固醇(LDL，壞的膽固醇)的氧化作用。研究發現，吃7天黑巧克力可降低6%的壞膽固醇，提升9%的好膽固醇。</p>
        </div>
        <div class="col-md-6 col-12 d-flex align-items-center p-4">
          <img
            class="img-fluid rounded"
            src="https://hips.hearstapps.com/hbztw.h-cdn.co/assets/16/46/2560x1707/gallery-1479370485-gettyimages-518337621.jpg?resize=980:*"
            alt
          />
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