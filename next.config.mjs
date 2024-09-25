/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.WP_IMAGES_URL,
      "img.youtube.com",
      "cloudflare-ipfs.com",
    ],
  },
};

export default nextConfig;
