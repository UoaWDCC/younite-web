const path = require("path");
const { config } = require("process");
const { routes } = require("./email");

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/email",
      handler: "api::email.email.sendEmail",
      config: {
        auth: false,
      },
    },
  ],
};
