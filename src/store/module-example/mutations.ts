import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation(/* state.ts: ExampleStateInterface */) {
    // your code
  },
};

export default mutation;
