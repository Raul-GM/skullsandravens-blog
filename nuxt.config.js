import Mode from 'frontmatter-markdown-loader/mode'
// import blogsEn from './content/en/blogsEn.js'
import blogsEs from './content/es/blogsEs.js'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Skulls & Ravens - Un blog sobre Rock y Heavy Metal',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content:
          'Un blog sobre Rock y Heavy Metal. Se hablará de los conciertos a los que he asistido. Habrá una sección de mujeres de la industria del Metal y mucho más esta por venir'
      },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      { name: 'author', content: 'RaúlGM' },
      { name: 'copyright', content: 'Todos los derechos reservados a RaúlGM' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    '~/plugins/global-components.js',
    '~/plugins/filters.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-webfontloader'],
  webfontloader: {
    custom: {
      families: ['Girassol', 'Muli', 'Prociono'],
      urls: ['/fonts/fonts.css']
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS]
        }
      })
    }
  },
  generate: {
    routes: ['/', '404']
      // .concat(blogsEn.map(w => `/blog/${w}`))
      .concat(blogsEs.map((blogEs) => `es/blog/${blogEs}`))
  }
}
