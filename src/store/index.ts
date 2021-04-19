import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import ads from "src/store/ads/ads";
import user from "src/store/user/user";
import shared from "src/store/shared/shared";

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface RootState {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // example: unknown;
  version?: string;
}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  const Store = new Vuex.Store<RootState>({
    state: {
      version: '1.0.0' // a simple property
    },
    modules: {
      ads,
      user,
      shared,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});
