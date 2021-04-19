import { ActionTree } from 'vuex';
import { RootState } from '../index';
import { ExampleStateInterface } from './state';

const actions: ActionTree<ExampleStateInterface, RootState> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
