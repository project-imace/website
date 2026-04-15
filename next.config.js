/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.imace.online',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  async rewrites() {
    return [
      {
        source: '/lm-v1/:path*',
        destination: 'https://revarielmv1.vercel.app/lm-v1/:path*',
      },
      {
        source: '/revarie1/:path*',
        destination: 'https://revarie1.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
