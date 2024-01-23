module.exports = {
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "wdcc-younite-strapi-image-bucket",
        publicFiles: true,
        uniform: true,
        serviceAccount: {
          type: "service_account",
          project_id: "wdcc-younite-prod",
          private_key_id: "e5db7eef122d370a9e39b41dbfa9eb0207cf1a37",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdW9tBEr0BXIfk\ntoh2OGBvxu45LD3BRXfdCMYd3HJPhXi5DsbvvLwJdPn8qFtD+8XX/438utSzfoP2\nuYvoODgg4dClaJO6f6ISI0047DJne2GrLyJ1t0C5TgM/HSRrTlBlbdqGTQfiQ5W1\noKu1EKwIMFCeQQb/O4Pi4ZlMxONaetyb/uS1UKyT/UKnwmQMMFTjRF8yUqwY1skj\n6jlJy1URnIYn9pHRH6KlC8xcHjbhFtmrjAZskT+b1Zky6rQTuEZ7Y/jSLFDRuYo+\nEZTwwly5KTd9UhXPSrzaNCAGUW6c0E0yrLNsKAQDOtoU0WhrBOhddXFnrl2xFSxP\ntk11Rb5zAgMBAAECggEADmHk6k+yIru4V/kvA88nUVAXWfZnNpEI4ZT5tqT9dbM3\nU4K8QBE6BotAhg1FOjN648Eh0yWoZzd7DEPtO65Xwvmgvl2Okw8zWwEK/9bmzHqE\ndMb8GVJEgitVNKGPQJeJ1Ztyy6+ittWCi3VB/GynrJ/t3mkHILDp3wTLpC6isRRA\n6VNUYyfryHlJZRWou1CYG/+pHNb5BWj6LDBGOAdsKOP0LSe3nruc0GN6qiLK8z2u\nz0Ln5X5rc0TBALyOf0cIryk+Pw+M9n3O7Rxu2dEV74fRq2kdQ2Q6FpzMiXaRyElG\n3vCsQEvmq1jdc5Z302DN3YjZyTR32Q2GKLz+E0b3kQKBgQDXhHXncOEhVPTsbx6/\nOrOy0Njq5y5nl+r9kmAZw4Cha7l7swNdyoowL6s3SAPt1T34UMGhakJS9lhniqaD\nTVPD2wmQxTN0Gygxopodt/mG0wdLH6uRqWPbSPpUw0CKzP4Ipul9nMIQ5XHe0VQe\nD28DD/GlAW4FUP2WpeiBy2ZQdwKBgQC66rxJfbD6bvBS3y+/Gm0vw/Z50/wZlBFW\nPvNpcruxU6eBDMJy6qp+Vu9z7iyzohYqDd/ijk3bvE1mwnDXdbk36YYGQN1Wg608\ncktygo2GovWClGgs8O29zXLB2TMcyZ8wcyo+OxdbLCo4BH9IDnWeQgfNVleMtP8W\nNSpqoxNc5QKBgCyIXGyUcJCYo3tvgqT1FkiuywPO/VG+nHoFEwJ/2UaBofQji2CI\nB4Hpd7GWmek9FO8IkNovwMCv0piil8Gt6s8fpZxag0VMj0OiW8IkT9VCKdGmG6ef\nntii/cciCWYk8aEMDFc+WwNuxdbK3lzPx5qUYtQ7tWY31A6a/a5EP0IFAoGABLER\nqtKR16djNuFNRIG4TeOgUyyD/mxeBwkrePEdTvUnljCozNOhFey+s+09iADAh6uz\ne+9Qevx+AN9Oj8nvrTyaVZvZMmu5tHO1+xjVzpRWj0GEX+RoQ0Rd5gm6o7VX3pJ1\nc/xtuKciJCfQvhFG2IMVyQyqw+hjIr6Q4v5W5RUCgYAEv8hxecjqDgoDk4kpKah8\nhOO3yDWSYxgfCbGrMYstUglk3sJu5KLxMtnmv3ADoHCBFbmSk3BteeE86Y/A6UWu\nZQMX9aOnzdgKrRPr6IAseWebo2FDh6ixT5L8dDDpsUIk6s2TQEqCcXDyn4F/8KLw\nYup4qxpCJgjObwtl61Z9Pw==\n-----END PRIVATE KEY-----\n",
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
