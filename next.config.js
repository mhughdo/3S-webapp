const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }, images: {
    domains: ['cdn.luxstay.com'],
  },
})
