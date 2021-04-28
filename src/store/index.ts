import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'

import { RootState, Color } from './types';
import ads from './ads/ads';
import shared from './shared/shared';
import userProfile from './user/index';

//Moking data for pages
import hdsc from 'src/assets/hardscales'
import colors from 'src/assets/colors'
import materials from 'src/assets/mats'

const hardScales = hdsc()
const allcolors = colors()
const allmaterials = materials()

// console.log(allcolors)
// console.log(allmaterials)

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state.ts';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<RootState>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<RootState>> = Symbol('vuex-key')


export default store (function (/* { ssrContext } */) {
  const Store = createStore<RootState>({
    modules: {
      // example
      // userProfile,
      // ads,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store
})

export function useStore() {
  return vuexUseStore(storeKey)
}

/*export default store(({ Vue }) => {
  Vue.use(Vuex);

  const Store = new Vuex.Store<RootState>({
    state: {
      version: '1.0.0', // a simple property
      hardScales: hardScales,
      colors: allcolors,
      materials: allmaterials
    },
    modules: {
      ads,
      userProfile,
      shared,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING,
  });
  return Store;
});*/

