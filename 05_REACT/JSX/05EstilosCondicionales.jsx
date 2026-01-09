import { useState } from "react"
import Box, { Text, Estilos } from "./05zBox"

const App = () => {
    /* Funciona para cambiar el color de fondo tocando el boton */
    const [mode, setMode] = useState("Off")    //Renderiza la clase Off

    /* Activa y desactiva la clase Off a On */
    const toggleMode = () => {
        setMode(mode === "Off" ? "On" : "Off")
    }

    return (
        <div className={mode}>
            <Box size="small"></Box>
            <Box size="medium"></Box>
            <Box size="large"></Box>
            <div>
                <button onClick={toggleMode}>{mode}</button>
            </div>
            <Text textsize="small"></Text>
            <Text textsize="medium"></Text>
            <Text textsize="large"></Text>

            <Estilos />
        </div>
    )
}

export default App