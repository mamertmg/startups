// next.config.js
module.exports = {
  images: {
    remotePatterns:[
      {
        "protocol": "https",
        "hostname": "startups-marqueza.s3.eu-central-1.amazonaws.com"
      },
    ]
  },
}
