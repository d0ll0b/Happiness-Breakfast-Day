<template>
    <!-- <h1>產品頁面</h1> -->
    <VueLoading :active="isLoading">
      <fairy-loading></fairy-loading>
    </VueLoading>
    <!-- 訊息 -->
    <alert-messages ref="AlertMessages"></alert-messages>
    <!-- 訊息 -->
    <div class="container">
      <div class="bg-primary text-white rounded-pill py-1 mb-1">
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
          <div class="col-sm-6 text-start">
              <div class="d-flex flex-column">
                <p class="badge bg-primary rounded-pill">{{ product.category }}</p>
                <h2 class="text-primary">{{ product.title }}</h2>
              </div>
              <p class="h5">描述：</p><br><p>{{ product.description }}</p><br>
              <!-- <p>商品內容：<br>{{ product.content }}</p> -->
              <del class="h6 text-danger">原價 NT${{ product.origin_price }} 元</del>
              <div class="h5">現在只要 NT${{ product.price }} 元</div>
                  <div>
                      <div class="input-group mt-3">
                      <input type="number" class="form-control"
                              min="1" v-model.number="qty">
                      <button type="button" class="btn btn-secondary text-light" @click="add_cart(product.id, qty, 'new')">加入購物車</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
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
