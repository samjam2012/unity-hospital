const {
  // cacheSubComponents,
  injectCustomSassLoaders,
  preventExternalsBundling
} = require("./config-utils");

const override = (config, env) => {
  // cacheSubComponents(config);
  injectCustomSassLoaders(config);
  preventExternalsBundling(config);

  return config;
};

module.exports = override;
