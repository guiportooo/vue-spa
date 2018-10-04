import Vue from 'vue'
import Vuex from 'vuex'
import postsModule from './posts'
import loginModule from './login'

Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
  modules: {
    postsModule,
    loginModule
  }
})

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    let expiration = window.localStorage.getItem('tokenExpiration')
    let unixTimestamp = new Date().getTime() / 1000

    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      store.dispatch('loginModule/updateAuthenticated', true)
    }
  })
}

export default store
