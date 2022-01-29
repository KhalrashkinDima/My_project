export default {
  namespaced: true,
  state: {
    status: '123',
    token: localStorage.getItem('token') || '123',
    users: [{ name: "admin", password: "admin" }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {

  },
}