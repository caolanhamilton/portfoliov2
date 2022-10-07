/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "www.kindpng.com",
      "icons-for-free.com",
      "reactjs.org",
      "ih1.redbubble.net",
      "miro.medium.com",
      "res.cloudinary.com",
      "git-scm.com",
    ],
  },
};

module.exports = nextConfig;
