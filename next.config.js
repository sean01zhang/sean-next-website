/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    mdxRs: true,
  },
  // headers: [
  //   {
  //     key: "X-Frame-Options",
  //     value: "sameorigin"
  //   },
  //   {
  //     key: "Content-Security-Policy",
  //     value: "frame-ancestors 'self';"
  //   }
  // ]
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
