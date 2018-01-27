const getStoreConfiguration = () => {
  switch (process.env.NODE_ENV) {
    case "production":
      return require("./configureStore.production");
    case "development":
      return require("./configureStore.development");
    default:
      return require("./configureStore.testing");
  }
};

module.exports = getStoreConfiguration();
