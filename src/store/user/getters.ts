import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { UserState } from './types';


const getters: GetterTree<UserState, RootState> = {
  //someAction(/* context */) {
    // your code
  //},
  user: state => state.user,
  check: state => state.user !== null,
  notPrefetch: state => !state.prefetch,
  getTestInfo: state => {
    console.log('Вызван getTestInfo')
    if (state.prefetch == false){
      return 'User was not prefetched'
    }
    else{
      return 'User was prefetched'
    }
  }
};

export default getters;
