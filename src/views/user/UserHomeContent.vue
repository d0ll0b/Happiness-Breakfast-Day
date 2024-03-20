<template>
    <div class="container">
        <!-- swiper -->
        <swiper
            :pagination="{
            dynamicBullets: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
        </swiper>
        <!-- swiper -->

        <!-- description -->
        <p>我們的餐廳是幸福和美味的結合，是您開啟一天的幸福之旅的最佳起點。無論您是想要輕鬆享受一頓早餐還是慶祝特殊時刻，我們都能為您打造一個充滿幸福的用餐體驗。</p>
        <!-- description -->

    </div>
</template>

<script>
import { Pagination } from 'swiper/modules'
export default {
  data () {
    return {
      modules: [Pagination]
    }
  }
}
</script>
