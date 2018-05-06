import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      "id": 0,
      "login": "admin",
      "name": "admin",
      "password": "admin",
      "isAdmin": true
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  }
})
