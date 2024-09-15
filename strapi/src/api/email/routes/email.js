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
