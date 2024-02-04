module.exports = [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "younite-storage.fly.dev"],
          "media-src": ["'self'", "data:", "blob:", "younite-storage.fly.dev"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
