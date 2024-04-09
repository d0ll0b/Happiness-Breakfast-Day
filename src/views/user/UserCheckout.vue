<template>
  <VueLoading :active="isLoading">
    <fairy-loading></fairy-loading>
  </VueLoading>
  <!-- 訊息 -->
  <alert-messages ref="AlertMessages"></alert-messages>
  <!-- 訊息 -->
  <div class="container">
    <div class="d-flex row">
      <div class="col-7">
        <div class="my-5 mt-4 row justify-content-center">
          <h2 class="text-primary">訂購人資訊</h2>
          <v-form ref="form" class="mt-4" v-slot="{ errors }" @submit="onSubmit">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field id="email" name="email" type="email" class="form-control border-primary"
                :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                v-model="form.user.email"></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field id="name" name="name" type="text" class="form-control border-primary"
                :class="{ 'is-invalid': errors['name'] }" placeholder="請輸入姓名" rules="required"
                v-model="form.user.name"></v-field>
              <error-message name="name" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field id="tel" name="tel" type="tel" class="form-control border-primary"
                :class="{ 'is-invalid': errors['tel'] }" placeholder="請輸入電話" rules="required|minMaxLength:8,10"
                v-model="form.user.tel"></v-field>
              <error-message name="tel" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field id="address" name="address" type="text" class="form-control border-primary"
                :class="{ 'is-invalid': errors['address'] }" placeholder="請輸入地址" rules="required"
                v-model="form.user.address"></v-field>
              <error-message name="address" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea id="message" class="form-control border-primary" cols="30" rows="10"
                v-model="form.message"></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-primary text-light"
                :class="{ 'disabled': Object.keys(errors).length !== 0 || !carts.length }">送出訂單</button>
            </div>
          </v-form>
        </div>
      </div>
      <div class="col-5">
        <!-- 購物車列表 -->
        <div class="d-flex mt-4 justify-content-between">
          <div>
            <h2 class="text-primary">購物車</h2>
          </div>
          <div>
            <button class="btn btn-outline-danger" type="button" v-if="carts.length"
              @click="delete_cart()">清空購物車</button>
          </div>
        </div>
        <!-- table-bordered -->
        <table class="table align-middle border-primary border-top border-start border-end mt-4">
          <thead class="table-primary">
            <tr>
              <th class="text-start">品名</th>
              <th style="width: 150px">數量/單位</th>
              <th class="text-end">單價</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <template v-if="carts">
              <tr v-for="item in carts" :key="item.id">
                <td class="text-start d-flex justify-content-around">
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                  <img class="img-fluid" :src="item.product.imageUrl" alt="" width="150" height="150">
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <input min="1" type="number" class="form-control" v-model.number="item.qty" :disabled="isLoading"
                        @blur="add_cart(item.product_id, item.qty, item.id)">
                      <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <small class="text-success" v-if="item.coupon">折扣價：</small>
                  {{ item.product.price }}
                </td>
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="delete_cart(item.id)">
                    <i class="fas fa-spinner fa-pulse" v-if="isLoading"></i>
                    x
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ total }}</td>
            </tr>
            <tr v-if="carts.total !== carts.finalTotal">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ finalTotal }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import FairyLoading from '@/components/FairyLoading.vue'
import AlertMessages from '@/components/AlertMessages.vue'

const { VITE_APP_API_URL: apiUrl, VITE_APP_API_NAME: apiPath } = import.meta.env

export default {
  data () {
    return {
      carts: {},
      total: '',
      finalTotal: '',
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    FairyLoading,
    AlertMessages
  },
  methods: {
    add_cart (id, qty = 1, flg) {
      let api = ''
      let http = ''
      const message = `加入購物車成功，新增${qty}筆商品~~`
      this.isLoading = true

      if (flg === 'new') {
        api = `${apiUrl}/api/${apiPath}/cart`
        http = 'post'
      } else {
        api = `${apiUrl}/api/${apiPath}/cart/${flg}`
        http = 'put'
      }

      const cart = {
        product_id: id,
        qty
      }

      this.axios[http](api, { data: cart }).then((res) => {
        this.get_cart()
        this.$refs.AlertMessages.show_toast(message)
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
        this.$refs.userProductModal.hide_Model()
      })
    },
    get_cart () {
      this.isLoading = true
      const api = `${apiUrl}/api/${apiPath}/cart`

      this.axios.get(api).then((res) => {
        const { carts, total, finalTotal } = res.data.data
        this.carts = carts
        this.total = total
        this.finalTotal = finalTotal
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    },
    delete_cart (id = null) {
      let api = ''
      let message = ''
      let result = ''
      this.isLoading = true

      if (id === null) {
        result = confirm('是否清空購物車？')
        api = `${apiUrl}/api/${apiPath}/carts`
        message = '購物車已清空 ಥ_ಥ'
      } else {
        result = confirm('是否刪除品項？')
        api = `${apiUrl}/api/${apiPath}/cart/${id}`
        message = '已從購物車刪除 ಥ_ಥ'
      }
      if (result) {
        this.axios.delete(api).then((res) => {
          this.get_cart()
          this.$refs.AlertMessages.show_toast(message)
        }).catch((err) => {
          this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
        }).finally(() => {
          this.isLoading = false
        })
      }
    },
    onSubmit () {
      const api = `${apiUrl}/api/${apiPath}/order`
      this.isLoading = true

      this.axios.post(api, { data: this.form }).then((res) => {
        this.get_cart()
        this.$refs.form.resetForm()
        this.form.message = ''
        this.$refs.AlertMessages.show_toast('訂單已成交，謝謝~~')
        this.$router.push('/home')
      }).catch((err) => {
        this.$refs.AlertMessages.show_alert(err?.response.data.message, 1300, 'error')
      }).finally(() => {
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.get_cart()
  }
}
</script>
