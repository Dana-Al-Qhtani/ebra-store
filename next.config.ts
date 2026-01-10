/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // FakeStore images are commonly hosted here
      { protocol: "https", hostname: "fakestoreapi.com" },
      { protocol: "https", hostname: "i.imgur.com" },

      // Your fallback mock images
      { protocol: "https", hostname: "picsum.photos" },

      // ✅ Furniture mock images (Unsplash)
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
};

export default nextConfig;