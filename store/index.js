
export const state = () => ({
  actk: '',
  username: null,
  graderData: {
    currentCategory: null,
    currentTask: null,
    routes: []
  }
})

export const getters = {
  loggedIn(state) {
    return state.actk !== ''
  }
}

export const mutations = {
  loginForToken(state, info) {
    state.actk = info.token
    state.username = info.username
  },
  destroyToken(state) {
    state.actk = ''
  },
  setCategoryGrader(state, category) {
    state.graderData.currentCategory = category
  },
  setCategoryTask(state, task) {
    state.graderData.currentTask = task
  }
}

export const actions = {
  destroyToken(context) {
    if (context.getters.loggedIn) {
      context.commit('destroyToken', {})
      return new Promise((resolve, reject) => {
        resolve('')
        // this.$axios.post('/auth/logout')
        // .then((response) => {
        //   // localStorage.removeItem('access_token')
        //   context.commit('destroyToken', {})
        //   resolve(response)
        // })
        // .catch((error) => {
        //   // localStorage.removeItem('access_token')
        //   context.commit('destroyToken', {})
        //   reject(error)
        // })
      })
    }
  },
  signUpQuick(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/auth/signup_quick', {
        username: credentials.username,
        password: credentials.password,
        legal_name: credentials.legal_name,
        email: credentials.email
      })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  login(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/auth/login', {
        username: credentials.username,
        password: credentials.password
      })
        .then((response) => {
          const token = response.data.token
          const username = response.data.username
          // localStorage.setItem('access_token', token)
          context.commit('loginForToken', { username, token })
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  submitAnswer(context, data) {
    return this.$axios.post('/tasks/submitAnswer', {
      src_code: data.src_code,
      task_id: data.task_id
    })
  },
  nuxtServerInit({ dispatch, commit }, { req }) {
    if (req.cookies.vuex) {
      const { actk } = JSON.parse(req.cookies.vuex)
      this.$axios.setToken(actk)
    }
  }
}
