import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { UserState, User } from './types';
import * as types from '../mutation-types';
import axios from 'axios';
import { Cookies } from 'quasar';
import { baseUrl } from 'src/settings';


const actions: ActionTree<UserState, RootState> = {
  //someAction(/* context */) {
    // your code
  //},
  async fetchUser({commit}) {
    commit(types.CLEAR_ERROR)
    try {
      await axios.get<User>('/api/v1/fetchuser/')
        .then(response => {
          commit(types.UPDATE_USER, response.data)
          console.log('From FETCH - TRY:', response.data)
        })
    } catch (e) {
      commit(types.DELETE_USER)
      console.log('Error:', e)
      // commit(types.SET_ERROR, e.response.data.message)
    }
    commit(types.SET_PREFETCH, true)
  },

  updateUser({commit}, payload) {
    commit(types.UPDATE_USER, payload)
    console.log('Action - Update User')
  },

  setPrefetch({commit}, payload) {
    commit(types.SET_PREFETCH, payload)
  },

  async login({commit}, form) {
    commit(types.CLEAR_ERROR)
    commit(types.SET_LOADING, true)
    try {
      await axios.post(baseUrl + '/api/v1/auth/login', form, {
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
};

export default actions;
