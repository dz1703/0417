// home 模块
import { reqTest } from '@/api'
const actions = {
  async test({ commit }) {
    let result = await reqTest()
    commit('TEST', result)
  }
}

const mutations = {
  TEST(state, data) {
    state.testMsg = data
  }
}

const state = {
  testMsg: ''
}

const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
