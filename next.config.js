const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',  
        hostname: "media.licdn.com"
      }
    ]
  }
}

module.exports = nextConfig
