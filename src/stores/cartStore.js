import axios from 'axios'
import { defineStore } from 'pinia'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    carts: {},
    total: '',
    finalTotal: ''
  }),
  actions: {
    get_cart () {
      const api = `${apiUrl}/api/${apiPath}/cart`

      axios.get(api).then((res) => {
        const { carts, total } = res.data.data
        this.carts = carts
        this.total = total
        this.finalTotal = res.data.data.final_total
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      })
    }
  }
})
