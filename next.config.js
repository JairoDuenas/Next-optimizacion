const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  i18n: {
    locales: ['en_US', 'es'],
    defaultLocale: 'en_US',
  }
}

module.exports = withBundleAnalyzer(config)
