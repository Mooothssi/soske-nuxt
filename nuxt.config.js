
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'SOS Camp E-Assistant (SOSKE)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/node_modules/highlight.js/styles/kimbie.dark.css', lang: 'css' },
    { src: '~/assets/theme.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: true },
    { src: '~/plugins/axios-auth.js', ssr: true },
    { src: '~/plugins/textarea-autosize.js', ssr: false },
    { src: '~/plugins/vue-highlight.js', ssr: false },
    { src: '~/plugins/vue-progress-path.js', ssr: false },
    { src: '~/plugins/tags-input.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/eslint-module',
    '@nuxtjs/markdownit',
    'nuxt-fontawesome',
    'nuxt-user-agent'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://soske.silaalang.org/v1', // 'http://172.17.0.1:3000',
    browserBaseURL: 'https://soske.silaalang.org/v1' // : 'http://localhost:3000' http://soske.silaalang.org:3000
  },

  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },

  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  server: {
    port: 8080
  },
  render: {
    resourceHints: false
  }
}
