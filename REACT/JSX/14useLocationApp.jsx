import { useState, useEffect } from 'react'
import { useLocation, useNavigate, BrowserRouter } from 'react-router-dom'
import Region from "./14useLocationVisualizer"

const Rooter = () => (
    <BrowserRouter>
        <QueryManager />
        <GetLocation />
    </BrowserRouter>
)

//1.
    /* useLocation */
export const GetLocation = () => {
    const location = useLocation()
    console.log(location)
    return (
        <>
            <p>Current path: {location.pathname}</p>
            <p>Current path: {location.search}</p>
        </>
    )
}

//2.
    /* useLocation para URL personalizada */
const QueryManager = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isReady, setIsReady] = useState(false)
    const num = Math.floor(Math.random() * 100000)

    useEffect(() => {
        const params = new URLSearchParams(location.search)

        if (!params.has("search")) {
            params.set("search", "Page Local")
            params.set("id", num)
            params.set("name", "Diego")
            params.set("region", "Colombia")
            navigate({ pathname: location.pathname, search: params.toString() }, { replace: true })
        } else {
            setIsReady(true)
        }
    }, [location, navigate, num])

    return isReady ? <Region /> : null
}

export default Rooter