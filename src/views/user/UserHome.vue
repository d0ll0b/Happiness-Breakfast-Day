<template>
   <!-- class="d-none" -->
    <header>
        <user-header></user-header>
    </header>
    <main class="main-pt">
      <RouterView />
    </main>
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
