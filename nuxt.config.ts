// https://nuxt.com/docs/api/configuration/nuxt-config

console.log(process.env.apiBase)
export default defineNuxtConfig({
  modules: ["@nuxt/image-edge", "@vite-pwa/nuxt"],
  app: {
    baseURL: process.env.apiBase || "/",
  },
  runtimeConfig: {
    ipx: {
      dir: "../../public",
    },
  },
  image: {
    staticFilename: "[publicPath]/images/[name]-[hash][ext]",
    dir: "public",
  },
  build: {
    transpile: ["rxjs"],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Nuxt Vite PWA",
      short_name: "NuxtVitePWA",
      theme_color: "#ffffff",
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions:{
      enabled:true,
      type:"module"
    }
  },
  
});
