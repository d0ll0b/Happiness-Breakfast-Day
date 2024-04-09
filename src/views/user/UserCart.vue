<template>
    <VueLoading :active="isLoading">
      <fairy-loading></fairy-loading>
    </VueLoading>
    <!-- 訊息 -->
    <alert-messages class="top-50" ref="AlertMessages"></alert-messages>
    <!-- 訊息 -->
    <div class="container">
        <div class="d-flex row">
            <!-- 購物車列表 -->
            <div class="d-flex mt-4 justify-content-start">
                <div>
                    <h2 class="text-primary">購物車</h2>
                </div>
            </div>
            <table class="table align-middle border-primary border-top border-start border-end mt-4">
                <thead class="table-primary">
                    <tr>
                        <th class="text-start w-30">商品</th>
                        <th>單價</th>
                        <th style="width: 150px">數量</th>
                        <th class="text-end">小計</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="carts">
                    <tr v-for="item in carts" :key="item.id">
                        <td class="text-start">
                            <img class="me-3 product_img" :src="item.product.imageUrl" :alt="item.product.title">
                            {{ item.product.title }}
                            <div class="text-success" v-if="item.coupon">
                                已套用優惠券
                            </div>
                        </td>
                        <td>
                            <small class="text-success" v-if="item.coupon">折扣價：</small>
                            NT${{ item.product.price }}
                        </td>
                        <td>
                            <div class="input-group input-group-sm">
                                <div class="input-group">
                                  <input min="1" type="number" class="form-control" v-model.number="item.qty" :disabled="isLoading" @blur="add_cart(item.product_id,item.qty,item.id)">
                                  <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                                </div>
                            </div>
                        </td>
                        <td class="text-end">
                            <small class="text-success" v-if="item.coupon">折扣價：</small>
                            NT${{ item.product.price }}
                        </td>
                        <td>
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="delete_cart(item.id)">
                                <i class="fas fa-spinner fa-pulse" v-if="isLoading"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                    </template>
                </tbody>
                <tfoot class="table-primary">
                    <tr>
                      <td colspan="4" class="text-end">總計</td>
                      <td colspan="3" class="text-center">NT$ {{ total }}</td>
                    </tr>
                    <tr v-if="carts.total !== carts.finalTotal">
                      <td colspan="4" class="text-end text-success">折扣價</td>
                      <td colspan="3" class="text-center text-success">NT${{ finalTotal }}</td>
                    </tr>
                </tfoot>
            </table>
            <div class="text-end mb-4 d-flex justify-content-between">
                <div>
                    <button class="btn btn-outline-danger" type="button" v-if="carts.length" @click="delete_cart()">清空購物車</button>
                </div>
                <div>
                    <button class="btn btn-primary text-white" type="button" :class="{ 'disabled': !carts.length }" @click="this.$router.push('/checkout')">前往結帳</button>
                </div>
            </div>
        </div>
        <!-- 更多推薦 -->
        <h2 class="text-start text-primary mb-2">更多推薦</h2>
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
            class="mySwiper py-2 px-4"
        >

          <v-swiper-slide v-for="item in products" :key="item.id">
              <div class="col pb-4">
                  <div class="card h-100">
                    <!-- data-aos="flip-left" -->
                      <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
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
        <!-- 更多推薦 -->
    </div>
</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AlertMessages from '@/components/AlertMessages.vue'
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore.js'
import { Pagination, Navigation } from 'swiper/modules'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      total: '',
      finalTotal: '',
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
      products: {}
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
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
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
      let result = ''
      this.isLoading = true

      if (id === null) {
        result = confirm('是否清空購物車？')
        api = `${apiUrl}/api/${apiPath}/carts`
        message = '購物車已清空 ಥ_ಥ'
      } else {
        result = confirm('是否刪除品項？')
        api = `${apiUrl}/api/${apiPath}/cart/${id}`
        message = '已從購物車刪除 ಥ_ಥ'
      }
      if (result) {
        this.axios.delete(api).then((res) => {
          this.get_cart()
          this.$refs.AlertMessages.show_toast(message)
        }).catch((err) => {
          this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
        }).finally(() => {
          this.isLoading = false
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
    ...mapActions(cartStore, ['get_cart'])
  },
  mounted () {
    this.get_cart()
    this.get_product()
  }
}
</script>
