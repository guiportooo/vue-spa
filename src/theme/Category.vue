<template>
  <div class="container content">
      <div class="columns">
        <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
          <app-post :link="post.rest_api_enabler.Link">
            <h3 slot="title" v-html="post.title.rendered"></h3>
            <span slot="content" v-html="post.excerpt.rendered"></span>
          </app-post>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Post from './Post.vue'

export default {
  components: {
    'app-post': Post
  },
  computed: {
    ...mapGetters('postsModule', ['posts']),
    categoryId () {
      const categories = {
        'front-end': 2,
        'mobile': 11
      }
      return categories[this.$route.params.id]
    }
  },
  methods: {
    ...mapActions({
      updateCategory: ['postsModule/updateCategory']
    }),
    loadPosts () {
      this.updateCategory(this.categoryId)
    }
  },
  watch: {
    $route (to, from) {
      this.loadPosts()
    }
  },
  created () {
    this.loadPosts()
  }
}
</script>
