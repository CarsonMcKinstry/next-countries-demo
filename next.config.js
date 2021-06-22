const withGraphql = require("next-plugin-graphql");

module.exports = withGraphql({
  reactStrictMode: true,
  basePath: "/next-countries-demo",
  assetPrefix: "/next-countries-demo",
});
