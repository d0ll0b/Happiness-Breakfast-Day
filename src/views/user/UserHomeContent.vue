<template>
    <div class="container-fuild">
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
    </div>
    <div class="container">
        <!-- description -->
        <p>我們的餐廳是幸福和美味的結合，是您開啟一天的幸福之旅的最佳起點。無論您是想要輕鬆享受一頓早餐還是慶祝特殊時刻，我們都能為您打造一個充滿幸福的用餐體驗。</p>
        <!-- description -->

        <!-- 每日特餐 -->
        <!-- swiper card -->
        <!-- 每日特餐 -->

        <!-- location -->
        <h3>店鋪資訊</h3>
        <div class="d-flex">
            <div class="col-4 flex-column text-start">
                <ul><h4>太平洋店</h4><br>
                    營業時間:
                    <li><span class="h6">週一~週五: </span>早上05:00~中午12:00</li>
                    <li><span class="h6">週六: </span>早上05:00~中午13:30</li>
                    <li><span class="h6">週日: </span>公休</li>
                </ul>
                <p></p>
            </div>
            <div class="col-8 bg-success">Google Map暫定地</div>
        </div>
        <!-- location -->
    </div>
</template>

<script>
import { Pagination } from 'swiper/modules'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      products: {},
      isLoading: false
    }
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
      console.log(api)
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
  }
}
</script>
