import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import userInfo from './modules/user-info-mod'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    userInfo
  },
  getters,
  state: {
    showLoading: false
  }
})

export default store
