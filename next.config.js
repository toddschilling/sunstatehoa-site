const nextConfig = {
    productionBrowserSourceMaps: true,
    // If you're using TypeScript:
    webpack(config, options) {
        if (options.dev) {
            config.devtool = 'source-map';
        }
        return config;
    }
};

module.exports = nextConfig;
