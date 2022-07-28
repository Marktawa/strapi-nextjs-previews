'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('preview-button')
      .service('myService')
      .getWelcomeMessage();
  },
};
