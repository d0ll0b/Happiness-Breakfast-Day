<template>
  <VueLoading :active="isLoading">
    <fairy-loading></fairy-loading>
  </VueLoading>
  <!-- 訊息 -->
  <alert-messages ref="AlertMessages"></alert-messages>
  <!-- 訊息 -->
  <div class="container-fuild">
      <!-- description -->
      <div class="w-100 description text-white d-flex flex-column justify-content-between py-7">
        <div class="description-blur"></div>
        <h2 data-aos="fade-down-right">我們的餐廳是幸福和美味的結合，<br>是您開啟一天的幸福之旅的最佳起點。</h2><br><br>
        <h2 data-aos="fade-down-left" class="animate__fadeInDown">無論您是想要輕鬆享受一頓早餐還是慶祝特殊時刻，<br>我們都能為您打造一個充
            滿幸福的用餐體驗。</h2>
        <div class="down-arrow pt-auto pe-0 mx-auto animate__slideOutDown">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-double-downn" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </div>
      </div>
      <!-- description -->

      <!-- 公告 swiper -->
      <!-- <v-swiper
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
      </v-swiper> -->
      <!-- 公告 swiper -->
  </div>

  <div class="container-fuild bg-primary">
    <!-- 每日特餐 -->
        <!-- swiper card :slidesPerView="3" -->
        <h2 class="text-white pt-2">每日推薦</h2>
        <v-swiper
            :breakpoints="{
              1: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              996: {
                slidesPerView: 3
              }
            }"
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper py-2 px-4"
        >

          <v-swiper-slide v-for="item in products" :key="item.id">
              <div class="col pb-4">
                  <div class="card h-100">
                      <img :src="item.imageUrl" class="card-img-top" :alt="item.title" data-aos="flip-left">
                      <div class="card-body">
                          <h5 class="card-title">{{ item.title }}</h5>
                          <div class="card-text mt-2">
                              <div class="h5" v-if="item.origin_price === item.price">NT${{ item.price }}</div>
                              <div v-else>
                                  <span class="h5 me-1">NT${{ item.price }}</span>
                                  <del class="h6 text-danger">NT${{ item.origin_price }}</del>
                              </div>
                          </div>
                          <!-- @click="" -->
                          <div>
                              <button class="btn btn-secondary mt-2 text-light" type="button" @click="add_cart(item.id,1,'new')">加入購物車</button>
                          </div>
                      </div>
                  </div>
              </div>
          </v-swiper-slide>
        </v-swiper>
        <!-- 每日特餐 -->
  </div>

  <div class="container-fuild">
    <!-- location -->
    <div class="d-flex bg-light">
        <div class="col-12 col-sm-4 flex-column text-start justify-content-around py-3" data-aos="fade-left">
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
        <div class="col-8 d-none d-sm-block " data-aos="fade-up">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3702.747379850056!2d-133.4193056!3d-21.8672778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDUyJzAyLjIiUyAxMzPCsDI1JzA5LjUiVw!5e0!3m2!1szh-TW!2stw!4v1711270962625!5m2!1szh-TW!2stw"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-100 h-100"></iframe>
        </div>
    </div>
    <!-- location -->
  </div>

  <div class="container">

  </div>
</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AlertMessages from '@/components/AlertMessages.vue'
import AOS from 'aos'
import { Pagination, Navigation } from 'swiper/modules'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      products: {},
      isLoading: false
    }
  },
  components: {
    FairyLoading,
    AlertMessages
  },
  setup () {
    const modules = [Pagination, Navigation]

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
    },
    add_cart (id, qty = 1, flg) {
      let api = ''
      let http = ''
      const message = `加入購物車成功，新增${qty}筆商品~~`
      this.isLoading = true

      if (flg === 'new') {
        api = `${apiUrl}/api/${apiPath}/cart`
        http = 'post'
      } else {
        api = `${apiUrl}/api/${apiPath}/cart/${flg}`
        http = 'put'
      }

      const cart = {
        product_id: id,
        qty
      }

      this.axios[http](api, { data: cart }).then((res) => {
        this.$refs.AlertMessages.show_toast(message)
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
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
