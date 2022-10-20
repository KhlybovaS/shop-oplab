export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shop.oplab.ru Медицинские анализы онлайн в Томске',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Заказ анализов онлайн' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'Медицинские анализы в Томске' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: './assets/scss/index.scss'
  },

  axios: {
    baseURL: process.env.BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    analyze: true
  }, 
  target: 'static'
   
}
