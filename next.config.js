/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ["res.cloudinary.com", "img.youtube.com"],
  },
  env: {
    URL: "http://localhost:5000/",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: { ignoreDuringBuilds: true },
  webpack(config, options) {
    return config;
  },
});
