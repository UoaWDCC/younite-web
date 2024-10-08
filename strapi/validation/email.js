const { yup } = require("@strapi/utils");
const { object, string } = yup;

const EmailSchema = yup.object().shape({
  name: yup.string().required(),
  senderEmail: yup.string().email().required(),
  body: yup.string().required(),
});

module.exports = { EmailSchema };
