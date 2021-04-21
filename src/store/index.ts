import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import { RootState, Color } from './types';
import ads from './ads/ads';
import shared from './shared/shared';
import { userProfile } from './user/index';

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
 * directly export the Store instantiation
 */


export default store(({ Vue }) => {
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
});

