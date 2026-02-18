import { useState } from "react"

/* Renderizacion */
const Condicional = (props) => {
    let response
    if (props.value === 42) {
        response = <p>Its 42.</p>
    } else {
        response = <p>Its not 42.</p>
    }

    return (
        <>
            {response}
            <div>
                <ElementSecret />
            </div>
            <hr />
            <div>
                <App />
            </div>
            <hr />
            <div>
                <Examples />
            </div>
            <hr />
            <div>
                <Interfaces />
            </div>
            <hr />
            <div>
                <Interfaces2 nice={true} />
            </div>
        </>
    )
}


//1.
    /* Primera forma de ocultar mensajes */
const ElementSecret = () => {
    const [showSecret, setShowSecret] = useState(false)

    const toggleView = () => {
        setShowSecret(!showSecret)
    }

    let element
    if (showSecret === true) {
        element = <p>You&aposve found the secret!</p>
    } else {
        element = null         //Se utiliza null para que no se muestre nada en el documento
    }

    return (
        <>
            <h1>Secret Message Toggle!</h1>
            {element}
            <button onClick={toggleView}>Toggle</button>
        </>
    )
}
/* Segunda forma de ocultar mensajes */
const App = () => {
    const [prize, setPrize] = useState(undefined)      //Si se establece el estado en "false", "null", "undefined", "0", "NaN", "". No se mostrara nada. Pero si tiene un operador OR devolvera siempre el lado derecho. //Nota: Como el tercer elemento prize
    const [hasTicket] = useState(true)

    const openMysteryBox = () => {
        setPrize("🧸 Teddy Bear")
    }

    return (
        <>
            <h2>Mistery Box 🎁</h2>
            <p>{prize !== undefined ? prize : ""}</p>
            <p>{prize !== undefined && <p>You won a prize!</p>}</p>
            <p>{prize !== undefined || "Click to reveal your prize!"}</p>
            <button onClick={openMysteryBox}>Open</button>
            {hasTicket && <p>Welcome to the concert!</p>}
        </>
    )
}


//2.
    /* Mostrar y Quitar boton */
const Examples = () => {
    const [showMessages, setShowMessages] = useState(false)
    const toggleMessage = () => {
        setShowMessages(!showMessages)
    }

    return (
        <>
            <p>La humanidad se ha distinguido por el conocimiento bruto que ha tenido en los ultimos años.{!showMessages && "Over time..."}</p>
            {showMessages && (
                <div>
                    <p>Over time, we gre, learned, and continued to innovate.</p>
                    <p>Today, we&aposre excited about what the future holds!</p>
                </div>
            )}
            <button onClick={toggleMessage}>
                {showMessages ? "Read Less": "Read More"}
            </button>
            {!showMessages && <button onClick={toggleMessage}>Read More</button>}
        </>
    )
}


//3.
    /* Diferentes formas de renderizar una interfaz */
const Interfaces = () => {
    const [availiable] = useState([])    //Si dentro del array se pone un numero se renderizara el return

    if (availiable.length === 0) {
        return <h2>No available flights</h2>
    }

    /* Si en useState hay un valor mayor que 0. Se renderiza este componente */
    return (
        <div>
            <h1>flight list</h1>
            <p>Vuelos disponibles: {availiable}</p>
        </div>
    )
}
    /* Segunda forma de renderizar mensajes */
const Interfaces2 = (props) => {
    const [loading] = useState(true)
    const [error] = useState(undefined)
    
    /* Si es true. Se renderiza este componente */
    if (!props.nice) {
        return (
            <div>
                <h1>Not authenticated</h1>
                <p>Please log in firts</p>
                <button>Log in</button>
            </div>
        )
    } 

    /* Si es false. Se renderiza este componente */
    if (loading) {
        return <p>Loading your data...</p>
    } 

    /* Si hay un valor diferente a undefined. Se renderiza este componente */
    if (error) {
        return (
            <div>
                <p>Eror loading your data</p>
                <button>Try again</button>
            </div>
        )
    }

    /* Si props.nice es true, loading es false y error es undefined. Se renderiza este componente */
    return (
        <>
            <h1>Your Data</h1>
            <p>The firts data point...</p>
            <p>We also want to highlight...</p>
        </>
    )
}

export default Condicional