// https://nuxt.com/docs/api/configuration/nuxt-config
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
  },
});
