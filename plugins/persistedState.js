import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, req }) => {
  createPersistedState({
    paths: ['example', 'signin'], // 이게 없으면 모든 store를 저장하여 속도가 느려짐
    storage: {
      getItem: (key) => {
        if (process.server) {
          const parsedCookies = cookie.parse(req.headers.cookie)
          return parsedCookies[key]
        } else {
          return Cookies.get(key)
        }
      },
      // 참고: https://github.com/js-cookie/js-cookie#json
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: false }),
      removeItem: (key) => Cookies.remove(key),
    },
  })(store)
}
