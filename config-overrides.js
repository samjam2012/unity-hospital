const override = (config, env) => {
  const { injectCustomSassLoaders } = require("./config-utils")(config);

  injectCustomSassLoaders();
  return config;
};

module.exports = override;
