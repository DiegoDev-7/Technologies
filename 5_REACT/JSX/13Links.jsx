import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ApiAsync from "./12Api_Async"
import UseEffect from "./11UseEffect"

const App = () => {
    const [cambio, setCambio] = useState(false)
    const HandleClick = () => {
        setCambio(!cambio)
    }
    return (
        <BrowserRouter>
        {cambio ? <NavigationBar /> : <NavigationCalc />}
        <button onClick={HandleClick}>Click</button>
            <Routes>
                <Route path='ApiAsync' element={<ApiAsync />} />    {/* Para que funcione path="" tiene que ser igual a el atributo to="" de la etiqueta Link */}
                <Route path="UseEffect" element={<UseEffect />} />
            </Routes>
        </BrowserRouter>
    )
}

const NavigationBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/ApiAsync">ApiAsync</Link>
        </nav>
    )
}

const NavigationCalc = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br />
            Check out my <Link to="UseEffect">UseEffect</Link>
        </nav>
    )
}

export default App