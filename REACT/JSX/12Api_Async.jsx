import { useState, useEffect } from "react"


const RendeR = () => {
    return (
        <>
            <Asyncronia />
            <hr />
            <App />
            <hr />
            <Errores />
            <hr />
            <ErrorApropositio />
            <hr />
            <ErrorTryCatch />
            <hr />
            <ErrorSetTime />
        </>
    )
}


/* Uso de async, await */
const Asyncronia = () => {
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            const data = await response.json()
            console.log(data)
        }
        getData()
    }, [])

    return <p>Datos obtenidos en la consola.</p>
}


//1.
    /* Uso de .fetch .then .catch */
const App = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')    // Realiza una solicitud HTTP a la API de Pokémon
            .then((response) => response.json())            // Convierte la respuesta a JSON
            .then((data) => setData(data))                  // Actualiza el estado con los datos obtenidos
            .catch((error) => console.log('Error fetching data:', error.message))  //Maneja cualquier error que ocurra durante la solicitud.
    }, [])     // La dependencia vacía [] asegura que useEffect se ejecute solo una vez cuando el componente se monta

    if (!data) {        //Muestra un mensaje de carga mientras se obtienen los datos.
        return <div>Recuperando datos del servidor...</div>
    }

    return (        //Muestra los datos obtenidos una vez que están disponibles.
        <>
            <h1>Pokemon Forms</h1>
            {data ? (
                <ul>
                {data && data.forms.map((form, index) => (
                    <li key={index}>{form.name}</li>
                ))}
                    <li>Height: {data.height}</li>
                    <li>Weight: {data.weight}</li>
                    <li>Base Experience: {data.base_experience}</li>
                </ul>
            ) : (
                <p>Donwoloading data...</p>
            )}
        </>
    )
}

//2.
    /* Errores */
const Errores = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/dito')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error.message))
            .catch((error) => console.log(`Hay un problema! D: ${error.message}`))
    }, [])

    return (
        <>
            <h1>Error de el pokemon 1</h1>
            {error ?  (
                <p style={{color: "red"}}>{error}</p>
            ) : data ? (
                <ul>
                    {data.forms.map((person, index) => (
                        <li key={index}>{person.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Downloading data..</p>
            )}
        </>
    )
}

//3.
    /* Errores personalizados */
const ErrorApropositio = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/dito')
            .then((response) => {
                if (!response.ok) {                                         //Verifica si la respuesta no es exitosa.
                    throw new Error("Failed to fetch Pokemons data.")       //Lanza un error personalizado si la respuesta no es exitosa. Esto ejecuta el bloque then y pasa el control al bloque catch.
                }
                return response.json()                                     //Convierte la espuesta JSON is la respuesta es exitosa.
            })
            .then((data) => setData(data))                                  //Actualiza el estado con los datos obtenidos.
            .catch((error) => setError(error.message))                      //Maneja cualquier error que ocurra durante la solicitud, incluyendo el error personalizado lanzado con throw.
    }, [])

    return (
        <>
            <h1>Error de el pokemon 2</h1>
            {error ?  (
                <p style={{color: "red"}}>{error}</p>
            ) : data ? (
                <ul>
                    {data.forms.map((person, index) => (
                        <li key={index}>{person.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Downloading data..</p>
            )}
        </>
    )
}

//4.
    /* Try, Catch */
const ErrorTryCatch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/dito')
            if (!response.ok) {
                throw new Error("Failed to fetch Pokemons data")
            }
            const data = await response.json()
            setData(data)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h1>Error de el pokemon 3</h1>
            {error ?  (
                <p style={{color: "red"}}>{error}</p>
            ) : data ? (
                <ul>
                    {data.forms.map((person, index) => (
                        <li key={index}>{person.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Downloading data..</p>
            )}
        </>
    )
}

//5.
    /* Ejecutar errores en tiempo especifico */
const ErrorSetTime = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setData(["M4A1", "H416", "MK14"])
        }, 2000)
    })

    return (
        <>
            <h1>Objetivo</h1>
            {data ? (
                <ul>
                    {data.map((guns, index) => (
                        <li key={index}>{guns}</li>
                    ))}
                </ul>
            ) : (
                <p>Wait 2 seconds while loading</p>
            )}
        </>
    )
}

export default RendeR