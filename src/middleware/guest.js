import store from '../store'

export default async function (to, from, next) {
  if (store().getters.notPrefetch) {
    await store().dispatch('fetchUser')
  }
  if (store().getters.check) {
    next({ name: 'home' })
    store().dispatch('setError', 'You are already signed in')
  } else {
    next()
  }
}
