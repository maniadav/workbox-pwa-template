import { GenerateSW } from "workbox-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer, dev }) {
    if (!isServer && !dev) {
      config.plugins.push(
        new GenerateSW({
          swDest: "../public/sw.js",
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === "document",
              handler: "NetworkFirst",
              options: {
                cacheName: "pages-cache",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 24 * 60 * 60, // 1 day
                },
                networkTimeoutSeconds: 3,
              },
            },
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|mp4|webm|mov|avi)$/,
              handler: "CacheFirst",
              options: {
                cacheName: "media-assets",
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                },
              },
            },
          ],
          ignoreURLParametersMatching: [],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
