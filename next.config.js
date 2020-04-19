const withImages = require('next-images');

module.exports = withImages({
  // Target must be serverless
  target: 'serverless',
  // distDir already has .next as default
  distDir: '.next'
});
