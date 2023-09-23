// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-rating",
  ],
  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": [400, 500, 600, 700],
    },
    display: "swap",
    prefetch: true,
  },
});
