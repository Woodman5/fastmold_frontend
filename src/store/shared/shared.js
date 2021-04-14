import * as types from "src/store/mutation-types";

export default {
  state: {
    loading: false,
    error: null,
    message: null,
  },
  mutations: {
    [types.SET_LOADING](state, payload) {
      state.loading = payload
    },
    [types.SET_ERROR](state, payload) {
      state.error = payload
    },
    [types.CLEAR_ERROR](state) {
      state.error = null
    },
    [types.SET_MESSAGE](state, payload) {
      state.message = payload
    },
    [types.CLEAR_MESSAGE](state) {
      state.message = null
    }
  },
  actions: {
    setLoading ({commit}, payload) {
      commit(types.SET_LOADING, payload)
    },
    setError ({commit}, payload) {
      commit(types.SET_ERROR, payload)
    },
    clearError ({commit}) {
      commit(types.CLEAR_ERROR)
    },
    setMessage ({commit}, payload) {
      commit(types.SET_MESSAGE, payload)
    },
    clearMessage ({commit}) {
      commit(types.CLEAR_MESSAGE)
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    message (state) {
      return state.message
    }
  }
};
