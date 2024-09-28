// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'static'
  },

  runtimeConfig: {
 
    public: {
      BASE_URL:'https://backnews.shaajobd.com/api/',
    },
  },

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'css/main.css' },
        
      ],

      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', defer: true },
        { src: 'https://code.responsivevoice.org/responsivevoice.js?key=esWXaORW', defer: true },
      ],

    }
  }


})
