import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { Swiper, SwiperSlide } from 'swiper/vue'
import CKEditor from '@ckeditor/ckeditor5-vue'

import './assets/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 定義 VeeValidate規則(全部載入)
Object.keys(AllRules).forEach(rule => {
  if (rule !== 'default') {
    defineRule(rule, AllRules[rule])
  }
})

defineRule('minMaxLength', (value, [min, max]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true
  }
  const length = value.length
  if (length < min) {
    return `This field must be at least ${min} characters`
  }
  if (length > max) {
    return `This field must be less than ${max} characters`
  }
  return true
})

// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})

// 讀取外部的資源
setLocale('zh_TW')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(CKEditor)
app.component('VueLoading', Loading)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VSwiper', Swiper)
app.component('VSwiperSlide', SwiperSlide)
app.mount('#app')
