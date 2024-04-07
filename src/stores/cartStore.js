import axios from 'axios'
import { defineStore } from 'pinia'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    carts: {}
  }),
  actions: {
    get_cart () {
      const api = `${apiUrl}/api/${apiPath}/cart`

      axios.get(api).then((res) => {
        const { carts } = res.data.data
        this.carts = carts
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      })
    }
  }
})
