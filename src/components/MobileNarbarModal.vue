<template>
  <div id="MobileNarbarModal" ref="MobileNarbarModal" class="modal fade text-center animate__animated animate__bounceIn" tabindex="-1" aria-labelledby="MobileNarbarModalLabel"
         aria-hidden="true">
         <!-- data-backdrop="true" data-bs-dismiss="modal" -->
      <div class="modal-dialog modal-fullscreen bg-primary">
        <div class="container modal-content bg-primary">
          <ul class="w-100 h-100 list-unstyled d-flex flex-column justify-content-center align-items-center text-light modal-body">
            <li class="nav-item mt-3">
              <RouterLink to="/home" class="Logo navbar-brand w-100" @click="this.hide_Modal()">
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/dollob_api/1711250508957.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=L5bMIXsNqXrbJsZdRc1c2XRmdQSrn%2Brq%2FltzYJQjxjZ7%2FGqiMPl%2BK4LibQRXBKY67MVbx%2BBTlHKvR7p1LyqjwoDTC3kd4Y1fFh8IbKAvb3wn9SU6yNh4R%2FonSZ%2BailLNZqWm2yCB%2BxF50S65JJeMzpw0MNXIn%2FwX7y1vkTYaIZCEFQrzXl3n0ISS5ya5N6Qr7RLBj2S7kpdlDgUdvgjPf6B0O0QLA6YBrislOPO%2BYp8I%2FfdkM86jH2FA2EwImbNREVWKnW1OQfecyxSvvi1o3FusmZzypDanuYjh1IBzkbknqesqpRc42v2UnYUz5gO%2FAFvnNfZJPGgvMYyF7GOArw%3D%3D"
                          alt="好不幸福早餐店" width="300" height="100" class="Logo">
              </RouterLink>
            </li>
            <li class="nav-item py-3 w-100 border-2 border-bottom border-light">
              <RouterLink to="/home" class="nav-link fs-4" @click="this.hide_Modal()">首頁
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                  </svg>
              </RouterLink>
            </li>
            <li class="nav-item py-3 w-100 border-2 border-bottom border-light">
              <RouterLink to="/products" class="nav-link py-auto fs-4" @click.prevent="this.hide_Modal()">產品列表
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-egg-fried" viewBox="0 0 16 16">
                      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
                  </svg>
              </RouterLink>
            </li>
            <li class="nav-item py-3 w-100 border-2 border-bottom border-light">
              <RouterLink to="/cart" class="nav-link py-auto position-relative fs-4" @click.prevent="this.hide_Modal()">購物車
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                  <!-- <span class="position-absolute top-25 start-20 translate-middle badge rounded-pill bg-secondary" v-if="this.carts?.length">
                      {{ this.carts?.length }}
                      <span class="visually-hidden">unread messages</span>
                  </span> -->
              </RouterLink>
            </li>
            <li class="nav-item py-3 w-100 border-2 border-bottom border-light">
              <RouterLink to="/login" class="nav-link fs-4" @click.prevent="this.hide_Modal()">登入
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                  </svg>
              </RouterLink>
            </li>
            <li class="nav-item py-3 w-100 border-2 border-bottom border-light">
              <button class="nav-link fs-4 mx-auto" @click.prevent="this.hide_Modal()">關閉
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </button>
            </li>
            <li class="d-none">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      MobileNarbarModal: ''
    }
  },
  mounted () {
    this.MobileNarbarModal = new Modal(this.$refs.MobileNarbarModal, {
      // backdrop: 'static',
      keyboard: false
    })
  },
  methods: {
    getData () {
      this.$emit('get_data')
    },
    show_Modal () {
      this.MobileNarbarModal.show()
    },
    hide_Modal () {
      this.MobileNarbarModal.hide()
    }
  }
}
</script>
