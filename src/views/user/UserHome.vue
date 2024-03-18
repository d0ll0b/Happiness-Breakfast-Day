<template>
    <!-- <h1>首頁導覽列</h1>
        <RouterLink to="/">首頁</RouterLink> |
        <RouterLink to="/products">產品列表</RouterLink> |
        <RouterLink to="/cart">購物車列表</RouterLink> |
        <RouterLink to="/admin">登入後台</RouterLink> -->
    <header>
        <user-header></user-header>
    </header>
    <RouterView />
    <footer>
        <user-footer></user-footer>
    </footer>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import UserFooter from '@/components/UserFooter.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    UserHeader,
    UserFooter
  }
}
</script>
