export function getHostname () {
    if (process.env.VERCEL_ENV === "production") {
        return "proyectograndorder.es"
    }

    if (process.env.NODE_ENV == "development" && !process.env.VERCEL_ENV) {
        return "localhost:3000"
    }

    return process.env.VERCEL_URL || "proyectograndorder.es"
}

export function getOgImagePath(hostname, title) {
    if (title) {
        return `${"https://" + hostname}/api/og?title=${title}`
    }

    return `${"https://" + hostname}/api/og`
}