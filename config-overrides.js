const utils = require("./config-utils");

const override = (config, env) => {
  process.env.RELATIVE_PATHS = utils.findSubComponents();
  console.log(process.env);
  utils.injectCustomSassLoaders(config);
  return config;
};

module.exports = override;
