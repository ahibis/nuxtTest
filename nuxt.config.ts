// https://nuxt.com/docs/api/configuration/nuxt-config

console.log(process.env.apiBase);
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
      start_url: process.env.apiBase || "/",
      name: "Nuxt Vite PWA",
      short_name: "NuxtVitePWA",
      theme_color: "#ffffff",
      description: "Testing Nuxt3 PWA",
      icons: [
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: process.env.apiBase || "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
