import appService from '../app.service'

const state = {
  posts: [],
  categoryId: 0
}

const getters = {
  posts: state => state.posts
}

const actions = {
  updateCategory (context, categoryId) {
    appService.getPosts(categoryId).then(data => {
      context.commit('updateCategory', { id: categoryId, posts: data })
    })
  }
}

const mutations = {
  updateCategory (state, category) {
    state.categoryId = category.id
    state.posts = category.posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
