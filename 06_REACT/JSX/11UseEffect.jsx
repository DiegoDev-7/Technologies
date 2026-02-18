import { useState, useEffect } from "react"

const App = () => {
    return (
        <>
            <Party />
            <hr />
            <Magic />
            <hr />
            <CounterConsole />
            <hr />
            <Clock />
            <hr />
            <Contador />
            <hr />
            <AjustePantalla />
        </>
    )
}

//1.
    /* Ejemplo useEffect */
const Party = () => {
    const [salir, setSalir] = useState(false)
    const handleSalir = () => {
        setSalir(!salir)
    }
    return (
        <>
            <button onClick={handleSalir}>cambio</button>
            {salir && <Event />}
        </>
    )
}
const Event = () => {
    useEffect(() => {               // useEffect en esta parte significa cuando entra a la party.
        console.log("entra")

        return () => {              // El return en esta parte significa cuando Event ya no forme parte de la Party.
            console.log("sale")
        }
    }, [])                          // El array vacío significa que este efecto solo se ejecutará una vez al montar el componente.

    return (
        <>
            <h3>¡El Dj entra a la party!</h3>
            <h3>El Dj empieza a tocar</h3>
        </>
    )
}


//2.
    /* Segundo ejemplo */
const Magic = () => {
    const [showMagic, setShowMagic] = useState(false)

    return (
        <>
            <h2>Componentes</h2>
            <div>
                <button onClick={() => setShowMagic((prev) => !prev)}>{showMagic ? "Cerrado" : "Abierto"}</button>
                {showMagic ? <Stuff /> : <Magig />}
            </div>
        </>
    )
}
const Stuff = () => {
    return <div>Componente Cerrado</div>
}
const Magig = () => {
    useEffect(() => {
        console.log("Entramos en el componente")
        console.log("Abierto")

        return () => {
            console.log("Salimos de el componente")
            console.log("Cerrado")
        }
    }, [])

    return <div>Componente abierto</div>
}


/* Contador */
const CounterConsole = () => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        console.log("Primer Componente Default!")
    }, [])

    useEffect(() => {
        console.log("Componente Actualizado!")
    })

    useEffect(() => {
        console.log(`Contador actualizado a: ${count}`)
    }, [count])

    return (
        <>
            <h2>Logger Example: {count}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
        </>
    )
}


/* Reloj */
const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return <h3>Current time: {time}</h3>
}


/* Cuenta regresiva */
const Contador = () => {
    const [count, setCount] = useState(10)

    useState(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    
    return (
        <>
            <h1>Countdown: {count}</h1>
        </>
    )
}


/* Ajuste de la pantalla */
const AjustePantalla = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
  
      /* Actualiza el tamaño de la pantalla */
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  
    return (
      <div>
        <h1>Window Size</h1>
        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>
      </div>
    )
  }

export default App