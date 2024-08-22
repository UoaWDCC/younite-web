const _ = require("lodash");
const { EmailSchema } = require("../../../../validation/email");

module.exports = {
  async sendEmail(ctx) {
    try {
      // const reqBody = await sanitize.contentAPI.input(ctx.request.body);
      const validateBody = await EmailSchema.validate(ctx.request.body, {
        stripUnknown: true,
      });

      const emailTemplate = {
        subject: "Feedback Received From <%= body.name %>",
        text: `Feedback Received From <%= body.name %>
        <%= body.body %>`,
        html: `<h1>Feedback Received From <%= body.name %> </h1>
        <p><%= body.body %></p>
        <hr>
        <p>*Directly replying to this email will email the respondant in question.</p>`,
      };

      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: process.env.DEFAULT_EMAIL_TO,
          from: process.env.DEFAULT_EMAIL_FROM,
          replyTo: validateBody.senderEmail,
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
