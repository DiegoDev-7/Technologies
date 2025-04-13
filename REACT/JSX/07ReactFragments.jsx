import React from "react"

/* React.fragment and keys */
const App = () => {
    const key = "123"
    const text = "Welcome to the Props"
    const value = 100
    const product = "cocacola"
    
    return (
        <>
            <h1>Joke</h1>
            <ul>
                <React.Fragment key={key}>
                    <p>Why did the computer cross the road?</p>
                </React.Fragment>
                <React.Fragment key={key}>
                    <p>To fetch a new byte! 😂</p>
                </React.Fragment>
                <React.Fragment key={key}>
                    <p>How do functions break up?</p>
                </React.Fragment>
                <hr />
                <ListaPeliculas />
                <hr />
                <Desestructuracion text={text} value={value} />
                <hr />
                <Desestructuracion2 product={product} text={text} value={value} />
                <hr />
                <DesestructuracionPredeterminada3 product={product} />
                <hr />
                <DesestructuracionPredeterminada4 />
            </ul>
        </>
    )
}

//1.
const ListaPeliculas = () => {
    const peliculas = [
        { id: 1, nombre: "Star Wars", año: 1977 },
        { id: 2, nombre: "Matrix", año: 1999 },
        { id: 3, nombre: "Interstellar", año: 2014 }
    ]
    /* Lo que esta pasando es que cuando llamamos al .map((pelicula)) lo añadimos a un contenedor en este caso
       React.Fragment con la key={pelicula} para asi poder identificar que estamos llamando a un Array de objetos*/
    return (
      <>
        {peliculas.map((pelicula) => (
          <React.Fragment key={pelicula.id}> 
            <h1>{pelicula.nombre}</h1>
            <p>Año: {pelicula.año}</p>
          </React.Fragment>
        ))}
      </>
    )
}

//2.
    /* Desestructuracion */
    /* Nota: para que funcionen alguna de las dos se tienen que pasar como exportacion default */
const Desestructuracion = ({text, value}) => {
    return (
        <>
            <h1>{value} - {text}</h1>
        </>
    )
}
    /* Segunda forma de Desestructuracion */
const Desestructuracion2 = (props) => {
    const {product, value} = props

    return (
        <>
            <h2>Producto: {product}</h2>
            <p>price: ${value}</p>
        </>
    )
}

//3.
    /* Desestructuracion predeterminada */
const DesestructuracionPredeterminada3 = ({text = "El producto cuesta", value = 100}) => {
    return (
        <>
            <h1>{text} : ${value}</h1>
        </>
    )
}
    /* Segunda forma de Desestructuracion predeterminada */
const DesestructuracionPredeterminada4 = (props) => {
    const {product = "cocacola", value = 100} = props

    return (
        <>
            <h2>Producto: {product}</h2>
            <p>price: ${value}</p>
        </>
    )
}

export default App