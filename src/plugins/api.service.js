import Vue from 'vue'
import axios from 'axios'

const API_URL = "http://laravel-api.sjahn.gtz.kr/api"
const _axios = axios.create({
  baseURL: API_URL,
  timeout: 5000
})

Vue.axios = _axios
window.axios = _axios

Object.defineProperties(Vue.prototype, {
  axios: {
    get() {
      return _axios
    },
    put() {
      return _axios
    },
    post() {
      return _axios
    },
    delete() {
      return _axios
    }
  },
  $axios: {
    get() {
      return _axios
    },
    put() {
      return _axios
    },
    post() {
      return _axios
    },
    delete() {
      return _axios
    }
  }
})