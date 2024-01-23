module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider:
          "@strapi-community/strapi-provider-upload-google-cloud-storage",
        providerOptions: {
          bucketName: "wdcc-younite-strapi-image-bucket",
          publicFiles: true,
          uniform: true,
          serviceAccount: {
            type: "service_account",
            project_id: "wdcc-younite-prod",
            private_key_id: "e5db7eef122d370a9e39b41dbfa9eb0207cf1a37",
            private_key: env("GOOGLE_SECRET_KEY"),
            client_email:
              "younite-image-upload@wdcc-younite-prod.iam.gserviceaccount.com",
            client_id: "101009049232320625800",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url:
              "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url:
              "https://www.googleapis.com/robot/v1/metadata/x509/younite-image-upload%40wdcc-younite-prod.iam.gserviceaccount.com",
            universe_domain: "googleapis.com",
          },
          baseUrl: "https://storage.googleapis.com/{bucket-name}",
          basePath: "",
        },
      },
    },
  };
};
