import Vue from 'vue'
import Vuex from 'vuex'
import base from './module/base'
import userInfo from './module/user-info'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    userInfo
  }
})
