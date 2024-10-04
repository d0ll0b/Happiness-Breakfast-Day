<template>
    <!-- <h1>產品頁面</h1> -->
    <VueLoading :active="isLoading">
      <fairy-loading></fairy-loading>
    </VueLoading>
    <!-- 訊息 -->
    <alert-messages ref="AlertMessages"></alert-messages>
    <!-- 訊息 -->
    <div class="container">
      <div class="bg-primary text-white rounded-pill py-1 mb-1 d-none">
          <div class="h5 mb-0">
              <span>link預留地</span>
          </div>
      </div>
      <div class="mb-1">
          <div class="row">
              <div class="col-sm-6">
                <!-- <img class="img-fluid" :src="product.imageUrl" alt=""> -->
                <v-swiper
                  :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }"
                  :spaceBetween="10"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :modules="modules"
                  class="mySwiper2"
                >
                  <v-swiper-slide>
                    <img :src="product.imageUrl" class="main_product_img w-auto h-auto" :alt="product.title">
                  </v-swiper-slide>
                  <v-swiper-slide v-for="item in product" :key="item.id">
                    <img :src="item.imagesUrl" class="main_product_img w-auto h-auto" :alt="item.title">
                  </v-swiper-slide>
                </v-swiper>
                <!-- <v-swiper
                  @swiper="setThumbsSwiper"
                  :spaceBetween="10"
                  :slidesPerView="3"
                  :freeMode="true"
                  :watchSlidesProgress="true"
                  :modules="modules"
                  class="mySwiper"
                >
                  <v-swiper-slide>
                    <img :src="product.imageUrl" class="product_img" :alt="product.title">
                  </v-swiper-slide>
                  <v-swiper-slide v-for="(item, key) in product" :key="key">
                    <pre>{{ item.imagesUrl[key] }}</pre>
                    <img :src="item.imagesUrl[key]" class="product_img" :alt="item.title" v-if="item.imagesUrl[key] !== ''">
                  </v-swiper-slide>
                </v-swiper> -->
              </div>
          <!-- d-flex flex-column justify-content-between -->
          <div class="col-sm-6 text-start bg-gray">
              <div class="d-flex flex-column mt-2">
                <p class="badge bg-secondary rounded-pill h-50 me-2 my-auto w-25">{{ product.category }}</p>
                <h2 class="text-primary">{{ product.title }}</h2>
              </div>
              <div class="border border-1 border-primary mt-2 px-3 py-3 pb-3 rounded-3 shadow">
                <p class="mb-2">熱量： {{ product.description }}</p>
                <p class="fw-bold">{{ product.content }}</p>
                <br>
                <div class="d-flex flex-column align-items-end">
                    <div class="input-group input-group-sm mt-2">
                        <div class="input-group">
                          <button class="px-2 input-group-text" :disabled="isLoading || qty === 1" @click="qty-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                              <path fill="$secondary" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                            </svg>
                          </button>
                          <input min="1" type="number" class="form-control text-center" v-model.number="qty" readonly>
                          <button class="px-2 input-group-text" :disabled="isLoading" @click="qty+1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                          </button>
                        </div>
                    </div>

                    <!-- <div class="input-group mt-3">
                    <input type="number" class="form-control"
                            min="1" v-model.number="qty">
                    </div> -->
                </div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <del class="h6 text-danger">NT${{ product.origin_price }}</del>
                    <div class="h5 ms-2">NT${{ product.price }}</div>
                  </div>
                  <button type="button" class="btn btn-secondary text-light mt-2" @click="add_cart(product.id, qty, 'new')">加入購物車</button>
                </div>
              </div>
              </div>
          </div>
      </div>
    </div>
    <div class="container-fuild" v-if="category_product.length > 2">
      <!-- 類似餐點 -->
      <div class="bg-primary py-4">
        <div class="container">
          <h2 class="text-center text-light mb-0">其他推薦</h2>
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
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false
              }"
              :modules="modules"
              class="mySwiper py-2 px-4"
          >

            <v-swiper-slide v-for="item in category_product" :key="item.id">
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
        </div>
      </div>
      <!-- 類似餐點 -->
    </div>
</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AlertMessages from '@/components/AlertMessages.vue'
import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore.js'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

let id = ''
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      product: {},
      category_product: {},
      img: {},
      qty: 1,
      isLoading: false
    }
  },
  components: {
    FairyLoading,
    AlertMessages
  },
  setup () {
    let thumbsSwiper = ''

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper = swiper
    }

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs]
    }
  },
  methods: {
    // 取得單一商品
    get_product () {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/product/${id}`
      this.axios.get(api).then((res) => {
        const { product } = res.data
        this.product = product
        console.dir(this.product)
        this.get_products(this.product.category, this.product.id)
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    },
    // 取得類似品項
    get_products (category, id) {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/products?category=${category}`
      this.axios.get(api).then((res) => {
        const { products } = res.data
        this.category_product = products.filter((product) => product.id !== id)
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response?.data?.message, 1300, 'error')
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
    toastMsg (message) {
      this.$refs.messageToast.show_toast(message)
    },
    // mixinImg () {
    //   if (this.product.imagesUrl.length) {
    //     this.img = this.product.imagesUrl.unshift('TEST')
    //     console.log(this.img)
    //   }
    // },
    ...mapActions(cartStore, ['get_cart'])
  },
  mounted () {
    id = this.$route.params.id

    this.get_product()
    // this.mixinImg()
  }
}
</script>
