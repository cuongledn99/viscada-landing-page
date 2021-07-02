
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['kkNrJyWd8NCjuDPuWxxNP7'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  