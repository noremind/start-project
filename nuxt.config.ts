// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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
          api: 'modern-compiler',
          additionalData: `
          @use "@/assets/scss/variables.scss" as *;
        `,
        },
      },
    },
  },

  css: [
    "@/assets/scss/normalize.scss",
    "@/assets/scss/index.scss",
    "@/assets/scss/icons.scss",
    "@/assets/scss/primevue/index.scss",
  ],

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