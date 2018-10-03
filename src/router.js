import Vue from 'vue'
import VueRouter from 'vue-router'

const NotFound = () => import('./theme/NotFound.vue')
const Login = () => import('./theme/Login.vue')
const Category = () => import('./theme/Category.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/category/:id',
      name: 'category',
      component: Category
    },
    {
      path: '/',
      redirect: '/category/front-end'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

export default router
