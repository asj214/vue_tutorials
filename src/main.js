import Vue from 'vue'
import App from './App.vue'
import '@/plugins/api.service'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './plugins/base'

Vue.config.productionTip = false

const authentication = () => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    store.dispatch('USER')
  }
}

authentication()

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
