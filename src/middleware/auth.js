import store from '../store'

export default async function (to, from, next) {
  if (store().getters.notPrefetch) {
      await store().dispatch('fetchUser')
  }
  if (store().getters.check) {
    next()
  } else {
    next({name: 'login', query: {loginError: 'true'}})
  }
}
