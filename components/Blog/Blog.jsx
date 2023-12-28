import { useEffect, useRef } from "react"

export default function Blog () {
    const iframeRef = useRef(null)

    useEffect(() => {
        const body = document.querySelector("body")
        body.style.overflow = "hidden"

        return () => {
            body.style.overflow = "auto"
        }
    }, [])

    return <iframe
        ref={iframeRef}
        src="https://v2-embednotion.com/bb0669766241475597c9343b315e26a4?v=05e039556a0a431ba0dc1068ce14be5c"
        className="h-[102vh] w-full border-none  overflow-hidden"
     />
}