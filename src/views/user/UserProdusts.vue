<template>
    <VueLoading :active="isLoading">
      <fairy-loading></fairy-loading>
    </VueLoading>
    <!-- 訊息 -->
    <alert-messages ref="AlertMessages"></alert-messages>
    <!-- 訊息 -->
    <div class="container">
        <div class="my-4">
          <div class="row row-cols-1 row-cols-md-3 g-4" v-for="item in products" :key="item.id">
            <!-- <div class="col-3  pb-0  " data-aos="flip-left"></div> -->
                <div class="col">
                  <div class="card h-100 px-0">
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
            </div>

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
                          <RouterLink  class="btn btn-outline-primary" :to="`/product/${item.id}`">
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
        </div>
    </div>
</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AlertMessages from '@/components/AlertMessages.vue'

const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      products: [],
      product: {},
      pagination: {},
      isLoading: false
    }
  },
  components: {
    FairyLoading,
    AlertMessages
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
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.get_products()
  }
}
</script>
