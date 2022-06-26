export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: 'not-found' */ '@/pages/base/not-found.vue'),
    meta: {
      title: 'NotFound',
      showHeader: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'login' */ '@/pages/base/login.vue'),
    meta: {
      title: '登录',
      showHeader: false
    }
  }
]
