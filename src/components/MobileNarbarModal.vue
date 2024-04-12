<template>
  <div id="MobileNarbarModal" ref="MobileNarbarModal" class="modal fade text-center animate__animated animate__bounceIn" tabindex="-1" aria-labelledby="MobileNarbarModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <!-- 訊息 -->
        <alert-messages ref="AlertMessages"></alert-messages>
        <!-- 訊息 -->
        <div class="container-fuild">
          <ul class="container list-unstyled d-flex flex-column justify-content-center align-items-center ">
            <li class="nav-item bg-transparent border-bottom ">
                <a class="nav-link p-3 text-white text-center" aria-current="page" href="#">首頁</a>
            </li>
            <li class="nav-item  bg-transparent  border-bottom">
                <a class="nav-link text-white text-center " aria-current="page" href="#">飲食紅綠燈</a>
            </li>
            <li class="nav-item  bg-transparent border-bottom">
                <a class="nav-link text-white text-center " aria-current="page" href="#">餐點搭配</a>
            </li>
            <li class="nav-item bg-transparent border-bottom">
                <a class="nav-link text-white text-center " aria-current="page" href="#">營養計算機</a>
            </li>
            <li class="nav-item bg-transparent border-bottom">
                <a class="nav-link text-white text-center " aria-current="page" href="#">Q&A</a>
            </li>
        </ul>
        </div>
      </div>
    </div>
</template>

<script>
import AlertMessages from '@/components/AlertMessages.vue'
import Modal from 'bootstrap/js/dist/modal'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  props: ['product'],
  data () {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      title: '',
      ProductsModal: '',
      isLoading: false
    }
  },
  components: {
    AlertMessages
  },
  mounted () {
    this.ProductsModal = new Modal(this.$refs.productModal, {
      keyboard: false
    })

    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common.Authorization = token

    this.tempProduct = { ...this.product }
  },
  methods: {
    getData () {
      this.$emit('get_data')
    },
    show_Modal (flg, item) {
      switch (flg) {
        case 'new':
          this.isNew = true
          this.tempProduct = {
            imagesUrl: []
          }
          this.ProductsModal.show()
          break
        case 'edit':
          this.isNew = false
          this.tempProduct = { ...item }
          this.ProductsModal.show()
          break
      }
    },
    Update_product (id) {
      let api = ''
      if (this.isNew === true) {
        api = `${apiUrl}/api/${apiPath}/admin/product`
        this.axios.post(api, { data: this.tempProduct }).then((res) => {
          this.$refs.AlertMessages.show_toast('新增產品成功!!!')
          this.getData()
          this.ProductsModal.hide()
        }).catch((err) => {
          this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
        })
      } else {
        api = `${apiUrl}/api/${apiPath}/admin/product/${id}`
        this.axios.put(api, { data: this.tempProduct }).then((res) => {
          this.$refs.AlertMessages.show_toast('更新產品成功!!!')
          this.getData()
          this.ProductsModal.hide()
        }).catch((err) => {
          this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
        })
      }
    },
    ShowImagebtn (product) {
      if (!Object.prototype.hasOwnProperty.call(product, 'imagesUrl') && !Array.isArray(product.imagesUrl)) {
        product.imagesUrl = []
        product.imagesUrl.push('')
      }
      return true
    },
    UploadImg () {
      let api = ''
      api = `${apiUrl}/api/${apiPath}/admin/upload`
      this.isLoading = true
      const formData = new FormData()
      formData.append('file-to-upload', this.$refs.fileinput.files[0])
      this.axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        if (this.tempProduct.imageUrl === '' || this.tempProduct.imageUrl === undefined) {
          this.tempProduct.imageUrl = res.data.imageUrl
        } else if (this.tempProduct.imagesUrl[this.tempProduct.imagesUrl.length - 1] === '') {
          this.tempProduct.imagesUrl[this.tempProduct.imagesUrl.length - 1] = res.data.imageUrl
        } else {
          this.tempProduct.imagesUrl.push(res.data.imageUrl)
        }
        this.$refs.fileinput.value = ''
        this.$refs.AlertMessages.show_toast('圖片上傳成功!!!')
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
}
</script>
