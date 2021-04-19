import axios from 'axios'
import { Cookies } from 'quasar'
import * as types from '../mutation-types'
import * as models from '../data_models'

let mainpath = 'http://localhost:9000'

export default {

  state: {
    user: null as (null | models.User),
    prefetch: false as boolean,
  },

  mutations: {

    [types.DELETE_USER](state) {
      state.user = null
      // console.log('Mutation - Delete User')
    },

    [types.UPDATE_USER](state, user: models.User) {
      state.user = user
      // console.log('Mutation - Update User')
      // console.log('From Mutation - User:', state.user)
    },

    [types.SET_PREFETCH](state, payload) {
      state.prefetch = payload
    }
  },

  actions: {

    async fetchUser({commit}) {
      commit(types.CLEAR_ERROR)
      try {
        const {data} = await axios.get('/api/v1/fetchuser/')
        commit(types.UPDATE_USER, data)
        // console.log('From FETCH - TRY:', data)
      } catch (e) {
        commit(types.DELETE_USER)
        // console.log('Error:', e)
        // commit(types.SET_ERROR, e.response.data.message)
      }
      commit(types.SET_PREFETCH, true)
    },

    updateUser({commit}, payload) {
      commit(types.UPDATE_USER, payload)
      // console.log('Action - Update User')
    },

    setPrefetch({commit}, payload) {
      commit(types.SET_PREFETCH, payload)
    },

    async login({commit}, form) {
      commit(types.CLEAR_ERROR)
      commit(types.SET_LOADING, true)
      try {
        await axios.post(mainpath + '/api/v1/auth/login', form, {
          headers: {'X-CSRFTOKEN': Cookies.get('csrftoken')},
          withCredentials: true,
        })
          .then(response => {
            commit(types.UPDATE_USER, response.data)
            commit(types.SET_LOADING, false)
            commit(types.SET_PREFETCH, true)
          })
      } catch (error) {
        commit(types.SET_LOADING, false)
        commit(types.SET_ERROR, error.response.data.message)
        throw error
      }
    },

    async logout({commit}) {
      try {
        await axios.post('/auth/logout/', null, {
          headers: {'X-CSRFTOKEN': Cookies.get('csrftoken')}
        })
      } catch (e) {
      }
      commit(types.DELETE_USER)
      commit(types.SET_PREFETCH, false)
    },

  },

  getters: {
    user: state => state.user,
    check: state => state.user !== null,
    notPrefetch: state => !state.prefetch
  }
}
