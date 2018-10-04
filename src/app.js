import Vue from 'vue'
import router from './router'
import store from './vuex'
import AppLayout from './theme/Layout.vue'

const app = new Vue({
  router,
  ...AppLayout,
  store
})

export { app, router, store }
