const { config } = require("process");
const email = require("../src/api/email/controllers/email");

module.exports = ({ env }) => {
  const productionConfig =
    process.env.NODE_ENV === "production"
      ? {
          upload: {
            config: {
              provider: "@krowten/strapi-provider-upload-s3",
              providerOptions: {
                bucket: env("MINIO_BUCKET"), // my-bucket
                baseUrl: env("MINIO_BASE_URL"), // http://localhost:9000/my-bucket
                // folder: 'custom/folder',
                credentials: {
                  accessKeyId: env("MINIO_ACCESS_KEY"),
                  secretAccessKey: env("MINIO_SECRET_KEY"),
                },
                endpoint: env("MINIO_ENDPOINT"), // http://localhost:9000
                forcePathStyle: true, // Required for minio
              },
              actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
              },
            },
          },
        }
      : {
          email: {
            config: {
              provider: "mailgun",
              providerOptions: {
                key: env("MAILGUN_API_KEY"),
                domain: env("MAILGUN_DOMAIN"),
              },
            },
            settings: {
              defaultFrom: "younitereply@gmail.com",
              defaultReplyTo: "younitereply@gmail.com",
              testAddress: "younitereply@gmail.com",
            },
          },
        };

  return {
    "strapi-plugin-populate-deep": {
      config: {
        defaultDepth: 5,
      },
    },
    ...productionConfig,
  };
};
