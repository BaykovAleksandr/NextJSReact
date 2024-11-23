import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       use: ['@svgr/webpack'],
//     })
//   }
//   }
