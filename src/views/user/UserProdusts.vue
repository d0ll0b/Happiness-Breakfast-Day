<template>
    <VueLoading :active="isLoading">
      <fairy-loading></fairy-loading>
    </VueLoading>
    <!-- 訊息 -->
    <alert-messages ref="AlertMessages"></alert-messages>
    <!-- 訊息 -->
    <div class="container">
        <div class="my-4">
          <div class="bg-primary text-start text-white rounded-pill ps-5 py-1 mb-1">
              <div class="h5 mb-0">
                  <span>首頁/美味餐點/全部</span>
              </div>
          </div>
          <!-- <ul v-for="item in uniqueCategorys" :key="item.id">
            <li>{{ item }}</li> /
          </ul> -->
          <!-- <button class="btn btn-primary text-light border border-2 border-white" type="button" @click="filter_item()">篩選</button> -->
          <h1 class="text-primary mb-2">全部商品</h1>
          <ul class="row row-cols-1 row-cols-md-3 g-4 ps-0">
            <li class="col" v-for="item in products" :key="item.id">
              <div class="card h-100 px-0">
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
            </li>

            <!-- <table class="table align-middle border-primary border-top border-start border-end">
                <thead class="table-primary">
                    <tr>
                    <th>圖片</th>
                    <th>商品名稱</th>
                    <th>價格</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id">
                    <td style="width: 200px">
                        <img :src="item.imageUrl" style="height: 100px; background-size: cover; background-position: center"/>
                    </td>
                    <td>
                        {{ item.title }}
                    </td>
                    <td>
                        <div class="h5" v-if="item.origin_price === item.price">{{ item.price }} 元</div>
                        <div v-else>
                            <del class="h6">原價 {{ item.origin_price }} 元</del>
                            <div class="h5">現在只要 {{ item.price }} 元</div>
                        </div>
                    </td>
                    <td>
                        <div class="btn-group btn-group-sm">
                          <RouterLink  class="btn btn-outline-primary">
                              <i class="fas fa-spinner fa-pulse" v-if="isLoading"></i>
                              查看更多
                          </RouterLink>
                          <button type="button" class="btn btn-secondary text-white" @click="add_cart(item.id,1,'new')">
                              <i class="fas fa-spinner fa-pulse" v-if="isLoading"></i>
                              加到購物車
                          </button>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table> -->
          </ul>
        </div>

        <!-- Pagination -->
        <pagination-btn class="d-flex justify-content-center" :pagination="pagination" @changePage="get_products"></pagination-btn>
        <!-- Pagination -->
    </div>
</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AlertMessages from '@/components/AlertMessages.vue'
import PaginationBtn from '@/components/PaginationBtn.vue'
import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore.js'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      products: [],
      product: {},
      pagination: {},
      category: {},
      filter: '',
      isLoading: false
    }
  },
  components: {
    FairyLoading,
    AlertMessages,
    PaginationBtn
  },
  methods: {
    // 取得所有商品
    get_products (page = 1) {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/products?page=${page}`
      this.axios.get(api).then((res) => {
        const { products, pagination } = res.data
        this.products = products
        this.pagination = pagination
        this.uniqueCategorys()
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    },
    // 取得單一商品
    get_product (id) {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/product/${id}`
      this.axios.get(api).then((res) => {
        const { product } = res.data
        this.product = product
        this.$refs.userProductModal.show_Model()
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
    uniqueCategorys () {
      const seen = new Set()
      const uniqueCategory = []
      this.category = this.products.filter(product => {
        if (!seen.has(product.category)) {
          seen.add(product.category)
          uniqueCategory.push(product.category)
        }

        return uniqueCategory
      })
    },
    ...mapActions(cartStore, ['get_cart'])
  },
  // computed: {
  //   uniqueCategorys () {
  //     const seen = new Set()
  //     return this.products.category.filters(item => {
  //       const k = item.id
  //       return seen.has(k) ? false : seen.add(k)
  //     })
  //   }
  // },
  mounted () {
    this.get_products()
  }
}
</script>
