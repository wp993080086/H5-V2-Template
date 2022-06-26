import Vue from 'vue'
import VueRouter from 'vue-router'
import base from './routers/base'
import home from './routers/home'

Vue.use(VueRouter)

const routes = [
  ...base,
  ...home
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
