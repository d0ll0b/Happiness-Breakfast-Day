<template>
  <div id="ArticleModal" ref="ArticleModal" class="modal fade text-start" tabindex="-1" aria-labelledby="productModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <!-- 訊息 -->
          <alert-messages ref="AlertMessages"></alert-messages>
          <!-- 訊息 -->
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span>編輯貼文</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-2">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label text-success h5 font-weight-bold ">標題</label>
                    <input type="text" class="form-control" id="imageUrl"
                           placeholder="請輸入文章標題" v-model="tempArticles.title">
                  </div>
                  <div class="mb-3">
                    <label for="img" class="form-label">圖片網址</label>
                    <input type="text" class="form-control" id="img"
                           placeholder="請輸入圖片網址" v-model="tempArticles.imageUrl">
                  </div>
                  <!-- <img class="img-fluid" :src="tempProduct.imageUrl" alt=""> -->
                  <div class="mb-3">
                    <label for="author" class="form-label">作者</label>
                    <input type="text" class="form-control" id="author"
                           placeholder="請輸入文章作者" v-model="tempArticles.author">
                  </div>
                  <div class="mb-3">
                    <label for="create_at" class="form-label">文章建立日期</label>
                    <input id="create_at" type="date" class="form-control" placeholder="文章建立日期" v-model="tempArticles.create_at">
                    <!-- 日期須轉換 -->
                  </div>
                </div>
                <!-- <div v-if="ShowImagebtn(tempProduct)">
                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      <i class="fas fa-spinner fa-pulse" v-if="isLoading"></i>
                      上傳圖片
                    </label>
                    <input class="form-control" type="file" id="formFile" ref="fileinput" @change="UploadImg" :disabled="isLoading">
                  </div>
                  <button v-if="tempProduct.imagesUrl.length < 5" class="btn btn-outline-primary btn-sm d-block w-100" @click="this.tempProduct.imagesUrl.push('');">
                    新增附圖
                  </button>
                  <button v-if="tempProduct.imagesUrl.length > 0" class="btn btn-outline-danger btn-sm d-block w-100" @click="this.tempProduct.imagesUrl.splice(-1, 1);">
                    刪除附圖
                  </button>
                </div> -->
              </div>
              <div class="col-sm-8">
                <div class="mb-3 d-none">
                  <label for="tags" class="form-label">標籤</label>
                  <input id="tags" type="text" class="form-control" placeholder="請輸入標題" v-model="tempArticles.tag">
                </div>

                <div class="mb-3">
                  <label for="description" class="form-label">文章描述</label>
                  <textarea id="description" type="text" class="form-control"
                            placeholder="請輸入文章描述" v-model="tempArticles.description">
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <!-- <textarea id="content" type="text" class="form-control"
                            placeholder="請輸入說明內容" v-model="tempProduct.content">
                  </textarea> -->
                  <ckeditor :editor="editor" :config="editorConfig" v-model="tempArticles.content"></ckeditor>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input id="is_enabled" class="form-check-input" type="checkbox" v-model="tempArticles.isPublic">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="Update_post(tempArticles.id)">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AlertMessages from '@/components/AlertMessages.vue'
import Modal from 'bootstrap/js/dist/modal'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env
let DateTime

export default {
  props: ['product'],
  data () {
    return {
      Articles: [],
      tempArticles: {},
      isNew: false,
      title: '',
      ArticlesModal: '',
      isLoading: false,
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', '|', 'link']
      }
    }
  },
  components: {
    AlertMessages
  },
  mounted () {
    this.ArticlesModal = new Modal(this.$refs.ArticleModal, {
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
          this.tempArticles = {
            imagesUrl: []
          }
          DateTime = new Date().toISOString().split('T')
          this.tempArticles.create_at = DateTime[0]
          this.ArticlesModal.show()
          break
        case 'edit':
          this.isNew = false
          this.tempArticles = { ...item }
          DateTime = new Date(this.tempArticles.create_at * 1000).toISOString().split('T')
          this.tempArticles.create_at = DateTime[0]
          console.dir(this.tempArticles)
          this.ArticlesModal.show()
          break
      }
    },
    Update_post (id) {
      let api = ''
      if (this.isNew === true) {
        this.tempArticles.create_at = Math.floor(new Date(this.tempArticles.create_at) / 1000)
        api = `${apiUrl}/api/${apiPath}/admin/article`
        this.axios.post(api, { data: this.tempArticles }).then((res) => {
          this.$refs.AlertMessages.show_toast('新增貼文成功!!!')
          this.getData()
          this.ArticlesModal.hide()
        }).catch((err) => {
          this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
        })
      } else {
        this.tempArticles.create_at = Math.floor(new Date(this.tempArticles.create_at) / 1000)
        api = `${apiUrl}/api/${apiPath}/admin/article/${id}`
        this.axios.put(api, { data: this.tempArticles }).then((res) => {
          this.$refs.AlertMessages.show_toast('更新貼文成功!!!')
          this.getData()
          this.ArticlesModal.hide()
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
