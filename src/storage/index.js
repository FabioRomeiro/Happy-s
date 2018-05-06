import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      'id': 0,
      'login': 'a',
      'name': 'usuario0',
      'password': 'a'
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  }
})
