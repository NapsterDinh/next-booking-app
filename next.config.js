/** @type {import('next').NextConfig} */

const nextConfig = (phase, { defaultConfig }) => {
  return {
    i18n: {
      locales: ["en", "vi", "kr"],
      defaultLocale: "en",
      localeDetection: false,
    },
    //config env can be used in browser and server
    env: {
      PORT: process.env.PORT,
    },
    swcMinify: true,
    reactStrictMode: false,
    experimental: {
      appDir: true,
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    devIndicators: {
      //an indicator appears in the bottom right corner of the page when Next.js compiling
      buildActivityPosition: "bottom-right",
      buildActivity: true,
    },
  };
};

module.exports = nextConfig;
