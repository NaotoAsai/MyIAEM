import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    accessToken: null,
    isLogin: false,
    user: {}
  },
  getters: {
    drawer: state => state.drawer,
    accessToken: state => state.accessToken,
    isLogin: state => state.isLogin,
    user: state => state.user
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    updateAccessToken(state,accessToken) {
      state.accessToken = accessToken
    },
    isLogin(state) {
      state.accessToken ? state.isLogin = true : state.isLogin = false
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu')
    },
    async autoLogin({ commit, dispatch }){
      const accessToken = $cookies.get('access_token')
      if (!accessToken) return
      const now = new Date()
      const expiryTimeMs = $cookies.get('expiryTimeMs')
      const isExpired = now.getTime() >= expiryTimeMs
      if (isExpired) {
        await dispatch('refreshAccessToken')
      } else {
        const expiresInMs = expiryTimeMs - now.getTime()
        setTimeout(() => {
          dispatch('refreshAccessToken')
        },expiresInMs)
        commit('updateAccessToken',accessToken)
      }
      commit('isLogin')
    },
    register({ dispatch }, authData) {
      const url = '/api/register'
      const params = authData
      axios.post(
        url,
        params
      )
      .then(response => {
        dispatch('login',authData)
      })
      .catch(error => {

      })
    },
    login({ dispatch }, authData) {
      const url = '/api/login'
      const params = authData
      axios.post(
        url,
        params
      )
      .then(response => {
        dispatch('setAuthData',{
          access_token: response.data.access_token,
          expires_in: response.data.expires_in
        })
        router.push({ name: 'home'})
      })
      .catch(error => {

      })
    },
    logout({ commit }){
      commit('updateAccessToken',null)
      $cookies.remove('access_token')
      $cookies.remove('expiryTimeMs')
      commit('isLogin')
      router.push({ name: 'entrance'})
    },
    async refreshAccessToken({ dispatch }){
      await axios.get('/api/refresh',{
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      })
      .then(response => {
          dispatch('setAuthData',{
          access_token: response.data.access_token,
          expires_in: response.data.expires_in
        })
      })
    },
    setAuthData({ commit, dispatch },authData) {
      const now = new Date()
      const expiryTimeMs = now.getTime() + authData.expires_in * 1000
      commit('updateAccessToken',authData.access_token)
      commit('isLogin')
      $cookies.set('access_token',authData.access_token)
      $cookies.set ('expiryTimeMs',expiryTimeMs)
      setTimeout(() => {
        dispatch('refreshAccessToken')
      }, authData.expires_in * 1000)
    }
  }
})