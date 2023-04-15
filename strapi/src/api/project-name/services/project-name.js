'use strict';

/**
 * project-name service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-name.project-name');
