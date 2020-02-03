const utils = require("./config-utils");

const override = (config, env) => {
  utils.injectCustomSassLoaders(config);
  return config;
};

module.exports = override;
