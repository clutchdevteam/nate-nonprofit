export default defineNuxtConfig({
  compatibilityDate: "10-28-2024",
  css: [
    "@/assets/css/roboto.css",
    "@/assets/css/main.css",
    "@/assets/css/tailwind.css",
  ],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_API_KEY,
        apiOptions: {
          region: "us", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
  ],
});
