import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default ({ store }) => {
  if (process.browser) {
    window.onNuxtReady(() => {
      createPersistedState({
        storage: {
          getItem: key => Cookies.get(key),
          // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
          setItem: (key, value) =>
            Cookies.set(key, value, { expires: 100800 }),
          removeItem: key => Cookies.remove(key)
        }
      })(store)
    })
  } else {
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 100800 }),
        removeItem: key => Cookies.remove(key)
      }
    })(store)
  }
}
