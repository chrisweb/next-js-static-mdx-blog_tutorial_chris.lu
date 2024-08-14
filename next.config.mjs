import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

const nextConfig = (phase) => {

    /** @type {import('next').NextConfig} */
    const nextConfigOptions = {
        reactStrictMode: true,
        poweredByHeader: false,
        experimental: {
            // experimental typescript "statically typed links"
            // https://nextjs.org/docs/app/api-reference/next-config-js/typedRoutes
            // currently false in prod until PR #67824 lands in a stable release
            // https://github.com/vercel/next.js/pull/67824
            typedRoutes: phase === PHASE_DEVELOPMENT_SERVER ? true : false,
        },
    }

    return nextConfigOptions

}

export default nextConfig