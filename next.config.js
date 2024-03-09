/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
    reactStrictMode: true,
    transpilePackages: ["ui"],
    images: {
        domains: ['i.imgur.com'],
    },
    webpack: (config) => {
        config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
        return config;
    }
})
