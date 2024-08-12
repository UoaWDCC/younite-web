module.exports = {
  async getEmail(ctx) {
    ctx.response.body = "hi";
  },

  async sendEmail(ctx) {
    try {
      console.log("send email");
      const { name, senderEmail, body } = ctx.request.body;

      await strapi.plugins["email"].services.email.send({
        to: "younitedev@gmail.com",
        from: senderEmail,
        replyTo: "younitedev@gmail.com",
        subject: "test",
        text: "test text",
        html: `hi`,
      });
      ctx.response.status = 200;
    } catch (err) {
      console.log(err);
      ctx.response.status = 400;
    }
  },
};
