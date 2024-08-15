const _ = require("lodash");

module.exports = {
  async sendEmail(ctx) {
    try {
      const reqBody = ctx.request.body;

      const emailTemplate = {
        subject: "Feedback Received From <%= body.name %>",
        text: `Feedback Received From <%= body.name %>
        <%= body.body %>`,
        html: `<h1>Feedback Received From <%= body.name %> </h1>
        <p><%= body.body %></p>`,
      };

      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: process.env.DEFAULT_EMAIL_TO,
          from: process.env.DEFAULT_EMAIL_FROM,
          replyTo: reqBody.email,
        },
        emailTemplate,
        {
          body: _.pick(reqBody, ["name", "email", "body"]),
        },
      );

      return ctx.response.status = 201;
    } catch (err) {
      console.log(400);
      return ctx.response.status = 400;
    }
  },
};
