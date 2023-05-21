/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pramcentre.co.uk",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
