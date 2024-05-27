<template>
  <h1 class="mt-3">貼文頁面</h1>
  <VueLoading :active="isLoading">
    <fairy-loading></fairy-loading>
  </VueLoading>
  <div class="container">
    <div class="mt-4">
      <!-- 刪除Modal -->
      <!-- <del-modal ref="DelModal" :temp="articles" @delproduct="Delete_product"></del-modal> -->
      <!-- 刪除Modal -->

      <!-- 訊息 -->
      <alert-messages ref="AlertMessages"></alert-messages>
      <!-- 訊息 -->

      <div class="text-end">
        <button class="btn btn-primary" type="button" @click="getArticles()">新增貼文</button>
      </div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th>標題</th>
            <th>作者</th>
            <th>描述</th>
            <th>建立日期</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="articles">
            <tr v-for="item in articles" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.create_at }}</td>
              <td>{{ item.isPublic }}</td>
              <td>
                <div class="btn-group btn-group-sm">
                    <!-- @click="this.$refs.CouponsModal.show_Modal('edit', item)" -->
                    <button type="button" class="btn btn-outline-primary">
                        <i class="fas fa-spinner fa-pulse" v-if="isLoading"></i>
                        修改
                    </button>
                    <!-- @click="this.$refs.DelModal.show_Modal('coupon', item)" -->
                    <button type="button" class="btn btn-outline-danger">
                        <i class="fas fa-spinner fa-pulse" v-if="isLoading"></i>
                        刪除
                    </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <pagination-btn :pagination="pagination" @change_page="getArticles"></pagination-btn>
    <!-- Pagination -->
  </div>
</template>

<script>
// import DelModal from '@/components/DelModal.vue'
import AlertMessages from '@/components/AlertMessages.vue'
import PaginationBtn from '@/components/PaginationBtn.vue'
import FairyLoading from '@/components/FairyLoading.vue'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      articles: [],
      pagination: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    // DelModal,
    AlertMessages,
    PaginationBtn,
    FairyLoading
  },
  methods: {
    getArticles (page = 1) {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/admin/articles?page=${page}`
      this.axios.get(api)
        .then((res) => {
          const { articles, pagination } = res.data
          this.articles = articles
          this.pagination = pagination
          console.log(this.articles)
        })
        .catch((err) => {
          this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    mounted () {
      this.getArticles()
    }
  }
}
</script>
