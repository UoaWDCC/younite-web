const _ = require("lodash");
const { EmailSchema } = require("../../../../validation/email");
const { sanitize } = require("@strapi/utils");

module.exports = {
  async sendEmail(ctx) {
    try {
      // const reqBody = await sanitize.contentAPI.input(ctx.request.body);
      const validateBody = await EmailSchema.validate(reqBody, {
        stripUnknown: true,
      });

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
          replyTo: validateBody.email,
        },
        emailTemplate,
        {
          body: _.pick(validateBody, ["name", "email", "body"]),
        },
      );

      return (ctx.response.status = 201);
    } catch (err) {
      console.log(err);
      return (ctx.response.status = 400);
    }
  },
};
