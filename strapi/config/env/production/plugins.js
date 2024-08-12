module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'), // Required
        domain: env('MAILGUN_DOMAIN'), // Required
      },
      settings: {
        defaultFrom: 'younitereply@gmail.com',
        defaultReplyTo: 'younitereply@gmail.com',
      },
    },
  },
});