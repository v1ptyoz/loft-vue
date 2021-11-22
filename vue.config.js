module.exports = {
  devServer: {
    proxy: "https://github.com",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/loft-vue/" : "/",
};
