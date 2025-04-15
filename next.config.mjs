/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages serves content from a subdirectory when using a project page
  // If you're using a custom domain or user/organization page, you can remove this
  basePath: '/Documentation',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
