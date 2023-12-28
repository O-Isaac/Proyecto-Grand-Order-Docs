export function getHostname () {
    if (process.env.VERCEL_ENV === "production") {
        return "proyectograndorder.es"
    }

    if (process.env.NODE_ENV == "development" && !process.env.VERCEL_ENV) {
        return "localhost:3000"
    }

    return process.env.VERCEL_URL || "proyectograndorder.es"
}