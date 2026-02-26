// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['@/assets/scss/index.scss'],

  modules: [
        "@pinia/nuxt"
    ],
    
  components: {
    global: true,
    dirs: ["@/components"],
  },

  vite: {
 css: {
   preprocessorOptions: {
     scss: {
       additionalData: `
         @use "@/assets/scss/abstracts/variables" as *;
         @use "@/assets/scss/abstracts/colors" as *;
         @use "@/assets/scss/base/colors" as *;
       `
     }
   }
 }
  },

  pinia: {
    storesDirs: ["./store/**"],
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.SERVER_API,
    },
  },

  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false }
})