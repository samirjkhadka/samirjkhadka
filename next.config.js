/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'',
                pathname:'./public/images/samirkhadka.png'
            }
        ]
    }
}

module.exports = nextConfig
