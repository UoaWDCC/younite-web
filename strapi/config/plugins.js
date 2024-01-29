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
          basePath: "",
        },
      },
    },
  };
};
