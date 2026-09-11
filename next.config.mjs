/** @type {import('next').NextConfig} */

<<<<<<< HEAD
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/venus-nextjs` : "";

const nextConfig = {
  basePath,
  assetPrefix: basePath,
=======
const nextConfig = {
  output: "export",
>>>>>>> origin/main
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
<<<<<<< HEAD
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
=======
>>>>>>> origin/main
};

export default nextConfig;
