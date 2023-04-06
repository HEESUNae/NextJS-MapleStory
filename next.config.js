/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/NextJS-MapleStory",
  reactStrictMode: true,
  images: {
    domains: ["heesunae.github.io"],
    loader: "imgix",
    path: "http://heesunae.github.io/NextJS-MapleStory/",
  },
};

module.exports = nextConfig;
