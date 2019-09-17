export default function ({ $axios, store }) {
  if (store.state.actk) {
    $axios.setToken(`${store.state.actk}`)
  }
  $axios.onRequest((config) => {
    if (store.state.actk) {
      config.headers.common.Authorization = `${store.state.actk}`
    }
  })
}
