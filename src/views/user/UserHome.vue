<template>
    <header class="d-none">
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
  components: {
    UserHeader,
    UserFooter
  },
  created () {
    this.$router.push('/home')
  }
}
</script>
