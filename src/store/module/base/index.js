const baseModule = {
  namespaced: true,
  state: () => ({
    b: '我是baseModule'
  }),
  getters: {
    getB(state) {
      return `${state.b}99999`
    }
  },
  mutations: {},
  actions: {}
}

export default baseModule
