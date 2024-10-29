const axios = require("axios");

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
  generate: {
    cache: false,
    concurrency: 25,
    fallback: true,
    crawler: false,
    routes: function (callback) {
      const token = process.env.STORYBLOK_API_KEY;

      const ignoreFiles = ["home", "global"];
      const routes = ["/"];

      const getRoutes = async () => {
        axios
          .get(`https://api.storyblok.com/v2/cdn/spaces/me?token=${token}`)
          .then((res) => {
            cacheVersion = res.data.space.version;

            axios
              .get(
                `https://api.storyblok.com/v2/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}`
              )
              .then((res) => {
                Object.keys(res.data.links).forEach((key) => {
                  if (!ignoreFiles.includes(res.data.links[key].slug)) {
                    if (
                      !(
                        res.data.links[key].is_folder &&
                        !res.data.links[key].is_startpage
                      )
                    ) {
                      routes.push("/" + res.data.links[key].slug);
                    }
                  }
                });
              });

            callback(null, routes);
          });

        getRoutes(ignoreFiles);

        return routes;
      };
    },
  },
});
