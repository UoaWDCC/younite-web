module.exports = ({ env }) => {
  const serviceAccountJsonBase64 = env("GOOGLE_SERVICE_ACCOUNT");
  const serviceAccountText = Buffer.from(
    serviceAccountJsonBase64,
    "base64"
  ).toString();
  console.log(serviceAccountText);

  const serviceAccount = serviceAccountText && JSON.parse(serviceAccountText);

  console.log(serviceAccount);

  return {
    upload: {
      config: {
        provider:
          "@strapi-community/strapi-provider-upload-google-cloud-storage",
        providerOptions: {
          bucketName: "wdcc-younite-strapi-image-bucket",
          publicFiles: true,
          uniform: true,
          serviceAccount: serviceAccount,
          baseUrl:
            "https://storage.googleapis.com/wdcc-younite-strapi-image-bucket",
          basePath: "",
        },
      },
    },
  };
};
