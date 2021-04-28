import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import { UserState } from './types';
import { RootState } from '../types';


const namespaced = true;

const userProfile: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};


export default userProfile
