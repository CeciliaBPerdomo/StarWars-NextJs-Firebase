/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", 
                hostname: 'starwars-visualguide.com', 
                port: "", 
                pathname: "/**"
            },
            {
                protocol: "https", 
                hostname: 'static.wikia.nocookie.net', 
                port: "", 
                pathname: "/**"
            },
            {
                protocol: "https", 
                hostname: 'umiere-a.akamaihd.net', 
                port: "", 
                pathname: "/**"
            },
            {
                protocol: "https", 
                hostname: 'i.pinimg.com', 
                port: "", 
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
