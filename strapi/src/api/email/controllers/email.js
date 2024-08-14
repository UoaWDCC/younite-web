const _ = require("lodash");

module.exports = {
  async getEmail(ctx) {
    ctx.response.body = "hi";
  },

  async sendEmail(ctx) {
    try {
      // const { name, senderEmail, body } = ctx.request.body;
      console.log(ctx.request.body);

      const body = ctx.request.body;

      const emailTemplate = {
        subject: "Feedback Received From <%= body.name %>",
        text: `Feedback Received From <%= body.name %>
        <%= body.body %>`,
        html: `<h1>Feedback Received From <%= body.name %> </h1>
        <p><%= body.body %></p>`,
      };

      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: env("DEFAULT_EMAIL_TO"),
          from: env("DEFAULT_EMAIL_FROM"),
          replyTo: body.email,
          subject: "name",
          text: "test text",
        },
        emailTemplate,
        {
          body: _.pick(body, ["name", "body"]),
        },
      );
      ctx.response.status = 200;
    } catch (err) {
      console.log(err);
      ctx.response.status = 400;
    }
  },
};
