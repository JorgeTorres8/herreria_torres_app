/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
    }
}
/*module.exports = { webpack: (config, { isServer }) => { // Fixes npm packages that depend on fs module if (!isServer) { config.node = { fs: ‘empty’ } }

    return config
    
    } }*/
module.exports = nextConfig
