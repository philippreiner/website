module.exports = {
    async rewrites() {
        return [
            {
                source: '/js/p.js',
                destination: 'https://plausible.io/js/plausible.js'
            },
            {
                source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
                destination: 'https://plausible.io/api/event'
            },
            {
                source: '/js/t.js', 
                destination: 'https://count.reiner.info/tracker.js'
            },
            {
                source: '/ackee/api', 
                destination: 'https://count.reiner.info/api'
            }
        ];
    },
    swcMinify: true,
    webpack: (config, { dev, isServer }) => {
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
          Object.assign(config.resolve.alias, {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
          });
        }
    
        return config;
      },
  }