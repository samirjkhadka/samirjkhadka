/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'localhost:3000',
                pathname:'./public/images/samirkhadka.png'
            }
        ]
    }
}

module.exports = nextConfig
