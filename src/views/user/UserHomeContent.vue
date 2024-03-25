<template>
  <VueLoading :active="isLoading">
    <fairy-loading></fairy-loading>
  </VueLoading>
  <div class="container-fuild">
      <!-- description -->
      <!-- py-7 -->
      <div class="w-100 description text-white d-flex flex-column justify-content-between py-7">
        <div class="description-blur"></div>
        <h2>我們的餐廳是幸福和美味的結合，<br>是您開啟一天的幸福之旅的最佳起點。</h2><br><br>
        <h2>無論您是想要輕鬆享受一頓早餐還是慶祝特殊時刻，<br>我們都能為您打造一個充滿幸福的用餐體驗。</h2>
      </div>
      <!-- description -->
      <!-- 公告 swiper -->
      <v-swiper
          :pagination="{
          dynamicBullets: true,
          }"
          :modules="modules"
          :autoplay="{ delay: 500 }"
          class="mySwiper d-none"
      >
          <v-swiper-slide v-for="item in products" :key="item.id">
              <img class="img-fluid" :src="item.imageUrl" alt="">
          </v-swiper-slide>
      </v-swiper>
      <!-- 公告 swiper -->

      <!-- location -->
      <div class="d-flex bg-light">
          <div class="col-4 flex-column text-start justify-content-around" data-aos="fade-left">
              <ul>
                  <h3 class="text-primary mt-3">店鋪資訊</h3><br>
                  <h4>太平洋店</h4><br>
                  <li><span class="h6">地址: </span>太平洋</li><br>
                  營業時間:
                  <li><span class="h6">週一~週五: </span>早上05:00~中午12:00</li>
                  <li><span class="h6">週六: </span>早上05:00~中午13:30</li>
                  <li><span class="h6">週日: </span>公休</li>
              </ul>
              <p></p>
          </div>
          <div class="col-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3702.747379850056!2d-133.4193056!3d-21.8672778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDUyJzAyLjIiUyAxMzPCsDI1JzA5LjUiVw!5e0!3m2!1szh-TW!2stw!4v1711270962625!5m2!1szh-TW!2stw"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-100 h-100"></iframe>
          </div>
      </div>
      <!-- location -->
  </div>
  <div class="container">
        <!-- 每日特餐 -->
        <!-- swiper card -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a short card.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 每日特餐 -->
  </div>
</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AOS from 'aos'
import { Pagination } from 'swiper/modules'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      products: {},
      isLoading: false
    }
  },
  components: {
    FairyLoading
  },
  setup () {
    const modules = [Pagination]

    return { modules }
  },
  methods: {
    // 取得單一商品
    get_product () {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/products`
      this.axios.get(api).then((res) => {
        const { products } = res.data
        this.products = products
      }).catch((err) => {
        alert(err)
      }).finally(() => {
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.get_product()
  },
  created () {
    AOS.init()
  }
}
</script>
