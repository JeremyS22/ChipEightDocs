import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
   webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  output: "export",  
  basePath: "/next-react-js-chip_eight_docs",
};


export default nextConfig;
