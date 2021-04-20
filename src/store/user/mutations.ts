import * as types from '../mutation-types'
import { MutationTree } from 'vuex';
import { UserState, User, Role } from './types';


const mutations: MutationTree<UserState> = {
  [types.DELETE_USER](state) {
    state.user = null
    // console.log('Mutation - Delete User')
  },

  [types.UPDATE_USER](state, user: User) {
    state.user = user
    // console.log('Mutation - Update User')
    // console.log('From Mutation - User:', state.ts.user)
  },

  [types.SET_PREFETCH](state, payload: boolean) {
    state.prefetch = payload
  }
}

export default mutations;

