import appService from '../app.service'

const state = {
  isAuthenticated: false
}

const getters = {
  isAuthenticated: state => state.isAuthenticated
}

const actions = {
  logout (context) {
    context.commit('logout')
  },
  login (context, credentials) {
    return new Promise((resolve) => {
      appService
        .login(credentials)
        .then(data => {
          context.commit('login', data)
          resolve()
        })
        .catch(() => window.alert('Could not login!'))
    })
  },
  updateAuthenticated (context, isAuthenticated) {
    context.commit('updateAuthenticated', isAuthenticated)
  }
}

const mutations = {
  logout (state) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', null)
      window.localStorage.setItem('tokenExpiration', null)
    }
    state.isAuthenticated = false
  },
  login (state, data) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('tokenExpiration', data.expiration)
      state.isAuthenticated = true
    }
  },
  updateAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
