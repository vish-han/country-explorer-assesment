/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flagcdn.com', 'mainfacts.com'],
        // Or use the newer remotePatterns format:
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mainfacts.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
