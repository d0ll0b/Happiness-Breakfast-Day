<template>
    <VueLoading :active="isLoading">
      <fairy-loading></fairy-loading>
    </VueLoading>
    <!-- 訊息 -->
    <alert-messages ref="AlertMessages"></alert-messages>
    <!-- 訊息 -->
    <div class="container-fuild">
      <!-- description -->
      <div class="w-100 description text-white d-flex flex-column justify-content-between align-items-center py-6">
        <div class="description-blur"></div>
        <div class="input-group w-25">
          <input type="text" class="form-control" placeholder="請輸入訂單代碼" aria-label="orders" aria-describedby="button-addon2" v-model="ordercode">
          <button class="btn btn-secondary text-light" type="button" id="button-addon2" @click="select_order()">搜尋</button>
        </div>
      </div>
      <!-- description -->

      <!-- 訂單狀態 -->
      <div class="w-100 d-flex row">
            <ul class="d-flex justify-content-evenly bg-primary text-light mb-0 py-3">
              <li class="d-flex flex-column align-items-center">
                <div class="cart-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16" v-if="this.$route.path === '/cart'">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16" v-else>
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
                  </svg>
                </div>
                <span class="fw-bold">訂單接收</span>
              </li>
              <li class="my-auto animate__animated animate__fadeInLeft animate__infinite">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </li>
              <li class="d-flex flex-column align-items-center">
                <div class="card-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-2-circle-fill cart-center" viewBox="0 0 16 16" v-if="this.$route.path === '/checkout'">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>
                  </svg>
                </div>
                <span class="fw-bold">餐點製作中</span>
              </li>
              <li class="my-auto animate__animated animate__fadeInLeft animate__infinite">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </li>
              <li class="d-flex flex-column align-items-center">
                <div class="cart-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-3-circle-fill cart-end" viewBox="0 0 16 16" v-if="this.$route.path === '/home'">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-3-circle" viewBox="0 0 16 16" v-else>
                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318"/>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                  </svg>
                </div>
                <span class="fw-bold">完成待取餐</span>
              </li>
            </ul>
        </div>
        <!-- 訂單狀態 -->
    </div>
</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AlertMessages from '@/components/AlertMessages.vue'
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore.js'
import Swal from 'sweetalert2'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      products: {},
      ordercode: ''
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
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'finalTotal'])
  },
  methods: {
    add_cart (id, qty = 1, flg) {
      let api = ''
      let http = ''
      const message = '更新購物車成功~~~'
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
        this.get_cart()
        this.$refs.AlertMessages.show_toast(message)
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    },
    delete_cart (id = null) {
      let api = ''
      let message = ''

      if (id === null) {
        api = `${apiUrl}/api/${apiPath}/carts`
        message = '購物車已清空 ಥ_ಥ'

        Swal.fire({
          title: '是否清空購物車？',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#A9E2F0',
          cancelButtonColor: '#d33',
          confirmButtonText: '是的',
          cancelButtonText: '考慮一下'
        }).then((result) => {
          if (result.isConfirmed) {
            this.isLoading = true
            this.axios.delete(api).then((res) => {
              this.get_cart()
              this.$refs.AlertMessages.show_toast(message)
            }).catch((err) => {
              this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
            }).finally(() => {
              this.isLoading = false
            })
          }
        })
      } else {
        api = `${apiUrl}/api/${apiPath}/cart/${id}`
        message = '已從購物車刪除 ಥ_ಥ'

        Swal.fire({
          title: '是否刪除品項？',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#A9E2F0',
          cancelButtonColor: '#d33',
          confirmButtonText: '是的',
          cancelButtonText: '考慮一下'
        }).then((result) => {
          if (result.isConfirmed) {
            this.isLoading = true
            this.axios.delete(api).then((res) => {
              this.get_cart()
              this.$refs.AlertMessages.show_toast(message)
            }).catch((err) => {
              this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
            }).finally(() => {
              this.isLoading = false
            })
          }
        })
      }
    },
    onSubmit () {
      const api = `${apiUrl}/api/${apiPath}/order`
      this.isLoading = true

      this.axios.post(api, { data: this.form }).then((res) => {
        this.get_cart()
        this.$refs.form.resetForm()
        this.form.message = ''
        this.$refs.AlertMessages.show_toast('訂單已成交，謝謝~~')
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    }, // 取得所有商品
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
    select_order () {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/coupon`

      const data = {
        code: this.code
      }

      this.axios.post(api, { data }).then((res) => {
        this.$refs.AlertMessages.show_toast(`已套用優惠卷 "${this.code}" ，謝謝~~`)
        this.code = ''
        this.get_cart()
      }).catch((err) => {
        alert(err)
      }).finally(() => {
        this.isLoading = false
      })
    },
    ...mapActions(cartStore, ['get_cart'])
  },
  mounted () {
    this.get_cart()
    this.get_product()
  }
}
</script>
