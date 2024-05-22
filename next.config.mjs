/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bucket-rn-40-dev-test.s3.amazonaws.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.royalenfield.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
};

export default nextConfig;
