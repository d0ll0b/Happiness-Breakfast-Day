<template>
      <!-- 訊息 -->
      <alert-messages ref="AlertMessages"></alert-messages>
      <!-- 訊息 -->
    <ul class="nav sidebar position-fixed flex-column h-100 bg-black text-white fw-bold px-2 overflow-hidden justify-content-start">
      <div>
        <li class="nav-item mt-2">
          <RouterLink to="/admin/products" class="navbar-brand">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/dollob_api/1711251316866.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mktI3HWO3w9YqWZCy71jMXTTggBMgUtbGJ1VEizol73xK9QQmc3d%2FUkeOHg42F7Po1RToxZZ6ZmdVrl8oHJIkK7nnRF3COgy1S8sivLpDChVXl%2FHbvqsnx8WR0rIqVRcujN5uXbnl1dYZ5S2%2FWdYiRSr1nmYWfSwisVIeQBJyEnsndP3w5xf0Yf7vEMj2fAt1lGQ1Z%2FpAqQbxTssMCocAZzCTVlM5f5MooH%2BBY3VX7TeibPRIcl7B5WoKb4XyPtvWGlKvO28Mym%2F4zNPuwnhLUoA9ggiyNxG29VPv2ktyD9kL8T3sNYhDvgvJrySB%2BmrkM%2FSfbWXtytV4a4EqjsQpA%3D%3D"
              alt="好不幸福早餐店">
          </RouterLink>
        </li>
      </div>

      <div>
        <li class="nav-item mt-4">
          <RouterLink to="/" class="nav-link h4">返回前台</RouterLink>
        </li>
        <li class="nav-item mt-4">
            <RouterLink to="/admin/products" class="nav-link h4">產品列表</RouterLink>
        </li>
        <li class="nav-item mt-4">
            <RouterLink to="/admin/orders" class="nav-link h4">訂單列表</RouterLink>
        </li>
        <li class="nav-item mt-4">
            <RouterLink to="/admin/Coupons" class="nav-link h4">優惠卷列表</RouterLink>
        </li>
        <!-- <li class="nav-item mt-4">
            <RouterLink to="/admin/posts" class="nav-link h4">貼文列表</RouterLink>
        </li> -->
        <li class="nav-item mt-4">
            <a href="#" class="nav-link h4" @click.prevent="signout">登出</a>
        </li>
      </div>
    </ul>
</template>

<script>
import axios from 'axios'
import AlertMessages from '@/components/AlertMessages.vue'
const { VITE_APP_API_URL: apiUrl } = import.meta.env

export default {
  data () {
    return {
      isLogin: false
    }
  },
  components: {
    AlertMessages
  },
  methods: {
    checkAdmin () {
      const api = `${apiUrl}/api/user/check`
      axios.post(api).then((res) => {
        this.isLogin = true
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
        this.$router.push('/login')
      })
    },
    signout () {
      const api = `${apiUrl}/logout`
      axios.post(api).then((res) => {
        document.cookie = 'hexToken=;expires=;path=/'
        this.$refs.AlertMessages.show_toast('已成功登出~~')
        this.$router.push('/login')
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
        this.$router.push('/login')
      })
    }
  },
  created () {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common.Authorization = token

    this.checkAdmin()
  }
}
</script>
