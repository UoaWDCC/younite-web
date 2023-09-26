'use strict';

/**
 * about-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-page.about-page');
