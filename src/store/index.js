import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: {
      id: null,
      name: null,
      email: null
    },
    accessToken: null,
    errors: null,
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: 'white',
    SidebarBg: ''
  },
  mutations: {
    SET_SIDEBAR_DRAWER (state, payload) {
      state.Sidebar_drawer = payload
    },
    SET_CUSTOMIZER_DRAWER (state, payload) {
      state.Customizer_drawer = payload
    },
    SET_SIDEBAR_COLOR (state, payload) {
      state.SidebarColor = payload
    },
    SET_AUTH(state, accessToken) {
      state.accessToken = accessToken
      // local storage
      localStorage.setItem('accessToken', accessToken)
    },
    SET_USER(state, user) {
      state.isAuthenticated = true
      state.user.id = user.id
      state.user.name = user.name
      state.user.email = user.email
    },
    LOGOUT(state) {
      state.isAuthenticated = false
      state.user.id = null
      state.user.name = null
      state.user.email = null
      state.accessToken = null
      localStorage.removeItem('accessToken')
    },
    SET_ERROR(state, error) {
      state.errors = error
    }
  },
  actions: {
    async LOGIN({ commit }, credentials) {
      const res = await Vue.axios.post('auth/login', credentials)
      let accessToken = res.data.access_token || null
      if (accessToken) {
        // header
        Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        // mutation
        commit('SET_AUTH', accessToken)
      }
      return res
    },
    async LOGOUT({ commit }) {
      await Vue.axios.delete('auth/logout')
      Vue.axios.defaults.headers.common['Authorization'] = null
      commit('LOGOUT')
    },
    async USER({ commit }) {
      const res = await Vue.axios.get('auth/me')
      commit('SET_USER', res.data.user)
      return res.data
    }
  }
})