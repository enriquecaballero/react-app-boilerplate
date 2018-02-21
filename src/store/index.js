const getStoreConfiguration = () => {
  switch (process.env.NODE_ENV) {
    case "production":
    case "development":
      return require(`./configureStore/${process.env.NODE_ENV}`);
    default:
      return require("./configureStore/testing");
  }
};

module.exports = getStoreConfiguration();
