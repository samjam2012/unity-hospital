/**
 * @param styleVariables import variables to append to sass loaders
 *
 *
 * */
const path = require("path");

const utils = {
  injectCustomSassLoaders: config => {
    const loaders = config.module.rules[2].oneOf;
    let cssLoader;
    let cssModuleLoader;
    let scssLoader;
    let scssModuleLoader;

    for (const loader of loaders) {
      if (!loader.loader) {
        if (loader.test.test(".scss")) {
          scssLoader = loader;
        }
        if (loader.test.test(".module.scss")) {
          scssModuleLoader = loader;
        }

        if (loader.test.test(".css")) {
          cssLoader = loader;
        }
        if (loader.test.test(".module.css")) {
          cssModuleLoader = loader;
        }
      }
    }

    // coerces all .scss files to act as modules
    addCustomSassOptions(scssLoader);
    addCustomSassOptions(scssModuleLoader);

    // attaches
    addGlobalSassVariables(scssLoader);
    addGlobalSassVariables(scssModuleLoader);
  }
};

const styleVariables = {
  sourceMap: false,
  prependData: `@import "${path.resolve(__dirname, "./src/variables.scss")}";`
};

const addCustomSassOptions = loader => {
  loader.use[1].options = {
    importLoaders: 2,
    modules: true
  };
};
const addGlobalSassVariables = loader => {
  loader.use[4].query = styleVariables;
  delete loader.use[4].options;
};

module.exports = utils;
