import { useState } from "react"

const Eventos = () => {

    /* Asigna el nombre h1 */
    const pageEvent = useState("Eventos")

    /* Asigna diferentes eventos de suma, resta y multiplicacion */
    const [count, setCount] = useState(0)
    const [multiply, setMultiply] = useState(1)
    const [rest, setRest] = useState(1000)
    const [divisor, setDivisor] = useState(10000)

    /* Asigna strings y booleanos */
    const [emoji, setEmoji] = useState("😂")
    const [isLightOn, setIsLightOn] = useState(false)
    const [name, setName] = useState("Peter Parker")
    const [option, setOption] = useState("Si")

    /* Suma */
    const hadleClick = () => {
        setCount(count => count + 1)
    }
    /* resta */
    const hadleClick2 = () => {
        setRest(rest - 20)
    }
    /* Multiplicacion */
    const hadleClick3 = () => {
        setMultiply(multiply => multiply * 2)
    }

    /* Añadir strings infinitas */
    const addEmote = () => {
        setEmoji(emoji + "😂")
    }
    
    /* Toggle function */
    const toggleLight = () => {
        setIsLightOn(!isLightOn)
    }
    /* Toggle function de un intento */
    const toggleName = () => {
        setName("Miles Morales")
    }
    /* Toggle function operador ternario */
    const toggleOption = () => {
        setOption(option === "Si" ? "No" : "Si")
    }

    return (
        <>
            <div>
                <h1>{pageEvent}</h1>
                <h3>Suma: {count}</h3>
                <button onClick={hadleClick}>Click me</button>
            </div>
            <div>
                <h3>Resta: {rest}</h3>
                <button onClick={hadleClick2}>Click me</button>
            </div>
            <div>
                <h3>Multiplicacion: {multiply}</h3>
                <button onClick={hadleClick3}>Click me</button>
            </div>
            <div>
                <h3>Division: {divisor}</h3>
                <button onClick={() => setDivisor(divisor / 2)}>Click me</button>
            </div>

            <div>
                <h3>Emoji: {emoji}</h3>
                <button onClick={addEmote}>Click me</button>
            </div>
            <div>
                <h3>Light On?: {String(isLightOn)}</h3>
                <button onClick={toggleLight}>Click me</button>
            </div>
            <div>
                <h3>My name is: {name}</h3>
                <button onClick={toggleName}>Click me</button>
            </div>
            <div>
                <h3>La pagina es funcional? {option}</h3>
                <button onClick={toggleOption}>Click me</button>
            </div>
        </>
    )
}

export default Eventos