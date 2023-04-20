import { useEffect, useState } from "react"
import { Callout } from "nextra-theme-docs"

export default function Report () {
    const [error, setError] = useState(false)

    useEffect(() =>  {
        if (!document.body) return 
        const script = document.createElement("script")
        
        script.onerror = () => setError(true)
        script.src = "https://formfacade.com/include/110273542715643408086/form/1FAIpQLSdJzVduuVy_sgwwtTbypMMm8MOLZ2mjdRcyH1YgS0Liu9ioiQ/classic.js?div=ff-compose"
        script.id = "ff-script"
        script.type = 'text/javascript';
        script.async = true;
            
        document.body.append(script)
    }, [])

    return (
        <>
            {error && (
                <Callout type="error">
                    Occurrio un error cuando cargaba el formulario por favor recargue la pagina.
                </Callout>
            )}
            <div className="h-[972px]" id="ff-compose"></div>
        </>
    )
}