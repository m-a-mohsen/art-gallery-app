/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  // reference :https://github.com/spiced-academy/lime-web-dev/blob/main/sessions/nextjs-basics-and-routing/nextjs-basics-and-routing.md
  images: {
    domains: ["example-apis.vercel.app"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
