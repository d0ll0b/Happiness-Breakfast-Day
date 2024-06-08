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
        <h2 class="description-text" data-aos="fade-down-right">我們的餐廳是幸福和美味的結合，<br>是您開啟一天的幸福之旅的最佳起點。</h2><br><br>
        <h2 class="description-text d-none d-sm-block" data-aos="fade-down-left" data-animation="fadeInDown">無論您是想要輕鬆享受一頓早餐還是慶祝特殊時刻，<br>我們都能為您打造一個充
            滿幸福的用餐體驗。</h2>
        <div class="down-arrow mt-4 mx-auto animate__animated animate__fadeInDown animate__infinite">
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
        <h2 class="text-white pt-2">美味餐點</h2>
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
            :modules="modules"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
            class="mySwiper py-2 px-4"
        >

          <v-swiper-slide v-for="item in products" :key="item.id">
              <div class="col pb-4">
                  <div class="card h-100">
                      <router-link :to="`/product/${item.id}`" class="img-router" data-aos="flip-left">
                        <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
                      </router-link>
                      <div class="card-body">
                          <h5 class="card-title">{{ item.title }}</h5>
                          <div class="card-text mt-2">
                              <div class="h5" v-if="item.origin_price === item.price">NT${{ item.price }}</div>
                              <div v-else>
                                  <span class="h5 me-1">NT${{ item.price }}</span>
                                  <del class="h6 text-danger">NT${{ item.origin_price }}</del>
                              </div>
                          </div>
                          <div>
                              <button class="btn btn-secondary mt-2 text-light" type="button" @click="add_cart(item.id,1,'new')">加入購物車</button>
                          </div>
                      </div>
                  </div>
              </div>
          </v-swiper-slide>
        </v-swiper>
        <!-- 每日特餐 -->

    <!-- 訂餐步驟 -->
    <h2 class="fw-bold text-light pt-2">訂餐流程</h2>
    <ul class="d-flex justify-content-evenly text-light mt-4 mb-0 ps-0 py-auto">
      <li class="d-flex flex-column align-items-center shake-slow" data-aos="fade-up">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clipboard-check order-process-svg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
          </svg>
        </div>
        <span class="fw-bold fs-3 mt-4 mb-4">1.挑選品項</span>
      </li>
      <hr>
      <li class="d-flex flex-column align-items-center shake-slow" data-aos="fade-up" data-aos-duration="900">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-alarm order-process-svg" viewBox="0 0 16 16">
            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
          </svg>
        </div>
        <span class="fw-bold fs-3 mt-4 mb-4">2.餐點製作</span>
      </li>
      <hr>
      <li class="d-flex flex-column align-items-center shake-slow" data-aos="fade-up" data-aos-duration="1800">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-seam order-process-svg" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
          </svg>
        </div>
        <span class="fw-bold fs-3 mt-4 mb-4">3.現場取餐</span>
      </li>
    </ul>
    <!-- 訂餐步驟 -->
  </div>

  <div class="container-fuild">
    <!-- location -->
    <div class="d-flex bg-light flex-column flex-sm-row">
        <div class="col-12 col-sm-4 flex-column text-start justify-content-around py-3"  data-aos="fade-right">
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
        <div class="col-12 col-sm-8">
            <iframe  data-aos="fade-up" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3702.747379850056!2d-133.4193056!3d-21.8672778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDUyJzAyLjIiUyAxMzPCsDI1JzA5LjUiVw!5e0!3m2!1szh-TW!2stw!4v1711270962625!5m2!1szh-TW!2stw"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-100 h-100"></iframe>
        </div>
    </div>
    <!-- location -->
  </div>

  <div>
    <button class="btn btn-sm scrollTopBtn text-light opacity-75" @click="scrollTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-caret-up-square-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11"/>
      </svg>
    </button>
  </div>

</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AlertMessages from '@/components/AlertMessages.vue'
import AOS from 'aos'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore.js'
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
    const modules = [Pagination, Navigation, Autoplay]

    return { modules }
  },
  methods: {
    // 取得所有商品
    get_product () {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/products`
      this.axios.get(api).then((res) => {
        const { products } = res.data
        this.products = products
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
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
        this.get_cart()
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    },
    ...mapActions(cartStore, ['get_cart']),
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
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
