export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Hibiscus' Site",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0' },
      { name: 'author', content: 'Hibiscus' },
      { name: 'description', content: 'Hibiscus - Make it Real' },
      { name: 'googlebot', content: 'notranslate' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],

    script: [
      {src: "https://www.googletagmanager.com/gtag/js?id=G-MND0S9FGM9", async: true},
      {
        innerHTML:
`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-MND0S9FGM9');`
      }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   icon: {
  //     /* icon options */
  //     source: 'static/icon.png'
  //   },
  //   meta: {
  //     name: 'Hibiscus\' Site',
  //     author: 'Hibiscus',
  //     description: 'Hibiscus - Make it Real',
  //     lang: 'en',
  //     nativeUI: true
  //   },
  //   manifest: {
  //     name: 'Hibiscus\' Site',
  //     short_name: 'Hibiscus',
  //     description: 'Hibiscus - Make it Real',
  //     lang: 'en',
  //     background_color: '#00FFCE'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    host: "0.0.0.0"
  },

}
