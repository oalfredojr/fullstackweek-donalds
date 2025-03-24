/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};


const nextConfig = {
  images: {
    domains: ["u9a6wmr3as.ufs.sh"], // Adicione este domínio
  },
};

module.exports = nextConfig;

