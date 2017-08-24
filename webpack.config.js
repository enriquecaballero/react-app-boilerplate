module.exports = () => {
  switch (process.env.npm_lifecycle_event) {
    case "start":
      return require ("./config/webpack.config.server");
    default:
      return require ("./config/webpack.config.build");
  }
};
