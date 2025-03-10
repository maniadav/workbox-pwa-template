import { GenerateSW } from "workbox-webpack-plugin";

module.exports = {
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
