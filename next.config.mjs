/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true, // Оптимізація SVG
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false, // Не видаляти атрибут `viewBox`
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: [
      "orisdi.com",
      "www.everich.com",
      "content.rozetka.com.ua",
      "m.media-amazon.com",
      "30316cca.rocketcdn.me",
      "vest.in.ua",
    ],
  },
};

export default nextConfig;
