import colors from 'vuetify/es5/util/colors'

export default {
  srcDir: 'src/',
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'pwa-store',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'msapplication-TileImage', content: '/favicon.png'},
      // {name: 'robots', content: process.env.ROBOTS_CONTENT},
    ],
    link: [
      {rel: 'icon', href: '/favicon.png', sizes: '192x192'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/metrics.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/recaptcha'
  ],

  recaptcha: {
    siteKey: "6LctSEQhAAAAAOsNNZAOnKXUzY56R-nowUYpkyUR",
    version: 3,
    hideBadge: true
  },

  robots: [
    {
      UserAgent: process.env.ROBOTS_USER_AGENT,
      Disallow: process.env.ROBOTS_DISALLOW
    },
    {
      Disallow: "*/search"
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.green,
          accent: colors.white,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        }
      },
    },
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    // rootRedirect: {
    //   statusCode: 301,
    //   path: 'en'
    // },
    locales: [
      {
        code: 'en',
        iso: 'en'
      },
      {
        code: 'en-us',
        iso: 'en-US'
      },
      {
        code: 'en-ca',
        iso: 'en-CA'
      },
      {
        code: 'en-in',
        iso: 'en-IN'
      },
      {
        code: 'en-ng',
        iso: 'en-NG'
      },
      {
        code: 'en-nz',
        iso: 'en-NZ'
      },
      {
        code: 'en-bd',
        iso: 'en-BD'
      },
      {
        code: 'en-au',
        iso: 'en-AU'
      },
      {
        code: 'ru',
        iso: 'ru'
      },
      {
        code:'ru-ru',
        iso: 'ru-RU'
      },
      {
        code:'ru-kz',
        iso: 'ru-KZ'
      },
      {
        code:'ru-uz',
        iso: 'ru-UZ'
      },
      {
        code:'az',
        iso: 'az'
      },
      {
        code:'az-az',
        iso: 'az-AZ'
      },
      {
        code:'de',
        iso: 'de'
      },
      {
        code:'de-de',
        iso: 'de-DE'
      },
      {
        code:'de-at',
        iso: 'de-AT'
      },
      {
        code:'de-ch',
        iso: 'de-CH'
      },
      {
        code:'pl-pl',
        iso: 'pl-PL'
      },
      {
        code:'jp-jp',
        iso: 'jp-JP'
      },
      {
        code:'tr-tr',
        iso: 'tr-TR'
      },
      {
        code:'fi-fi',
        iso: 'fi-FI'
      },
      {
        code:'se-se',
        iso: 'se-SE'
      },
      {
        code:'it-it',
        iso: 'it-IT'
      },
      {
        code:'pt-br',
        iso: 'pt-BR'
      },
      {
        code:'es-es',
        iso: 'es-ES'
      }
    ],
    defaultLocale: 'en',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
