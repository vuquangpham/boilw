/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("postcss-preset-env")({
      browsers: "last 2 versions",
    }),
  ],
};

module.exports = config;
