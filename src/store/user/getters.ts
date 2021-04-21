import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { UserState, User } from './types';


const getters: GetterTree<UserState, RootState> = {
  //someAction(/* context */) {
    // your code
  //},
  user: (state) : User | null => state.user,
  check: (state) : boolean => state.user !== null,
  notPrefetch: (state) : boolean => !state.prefetch,
  getTestInfo(state) : string {
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
