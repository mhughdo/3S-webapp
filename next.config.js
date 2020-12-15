const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }, images: {
    domains: ['cdn.luxstay.com', 'sans-imgs-bucket.s3-ap-southeast-1.amazonaws.com', '*'],
  },
})
