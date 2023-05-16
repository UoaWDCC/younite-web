"use strict";
const fs = require("fs");
const path = require("path");

const getSuperAdminRole = async (strapi) => {
  let superAdminRole = await strapi.db.query("admin::role").findOne({
    where: { code: "strapi-super-admin" },
  });

  if (!superAdminRole) {
    superAdminRole = await strapi.db.query("admin::role").create({
      data: {
        name: "Super Admin",
        code: "strapi-super-admin",
        description:
          "Super Admins can access and manage all features and settings.",
      },
    });
  }

  return superAdminRole;
};

const createAPITokenIfNotExist = async (strapi) => {
  const tokenService = strapi.service("admin::api-token");
  if (tokenService && tokenService.create) {
    const tokenAlreadyExists = await tokenService.exists({
      name: "dev",
    });
    if (tokenAlreadyExists) {
      return;
    }

    console.log(tokenService.create);

    const { accessKey } = await tokenService.create({
      name: "dev",
      type: "full-access",
      lifespan: 7776000000,
    });

    return accessKey;
  }
};

const writeTokenToEnv = (key) => {
  const envPath = "/frontend/.env";

  fs.writeFileSync(
    path.join(__dirname, "../../", envPath),
    `STRAPI_KEY=${key}`
  );
};

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    if (process.env.NODE_ENV === "production") return;

    const users = await strapi.db.query("admin::user").findMany({});

    if (users.length !== 0) return;

    const defaultAdmin = {
      firstname: "Younite",
      lastname: "Team",
      username: "Younite",
      password: "Developer2023",
      email: "ytao543@aucklanduni.ac.nz",
      blocked: false,
      isActive: true,
    };

    const superAdminRole = await getSuperAdminRole(strapi);
    defaultAdmin.roles = [superAdminRole.id];
    defaultAdmin.password = await strapi
      .service("admin::auth")
      ?.hashPassword(defaultAdmin.password);

    await strapi.db.query("admin::user").create({ data: { ...defaultAdmin } });

    const key = await createAPITokenIfNotExist(strapi);
    writeTokenToEnv(key);
  },
};
