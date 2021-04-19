import { GetterTree } from 'vuex';
import { RootState } from '../index';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, RootState> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
