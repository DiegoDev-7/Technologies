/* Propiedades Heredadas */
const Main = (props) => {
    return (
        <>
            <div>
                <h1>Heredamos una: {props.text}</h1>
            </div>
            <div>
                <p>I like {props.snack} and {props.main}</p>
            </div>
            <hr />
            <div>
                <Comp />
            </div>
            <hr />
            <div>
                <Boolean nice={props.nice} guns={props.guns} />
            </div>
            <hr />
            <div>
                <Numbers value={props.value}/>
            </div>
            <hr />
            <div>
                <Button />
            </div>
        </>
    )
}

//1.
    /* Operaciones y strings */
const score = 50
const edad = 27
const name = "Peter Parker"
const nameHeader = <h2>Lore</h2>
const heredadoName = <p>Nombre: {name}, edad: {edad}</p>
const url = "https://www.google.com"

const Comp = () => {
    return (
        <>
            <div>
                <p>Score: {score}</p>
            </div>
            <div>
                <p>Name Header: {nameHeader}</p>
            </div>
            <div>
                {heredadoName}
            </div>
            <div>
                <a href={url}>Este es un link a una pagina web</a>
            </div>
        </>
    )
}

//2.
    /* Booleanos props */
const Boolean = (props) => {
    return (
        <div>
            <p>Are yo nice? {String(props.nice)}</p>
            <p>Do you have a gun? {String(props.guns)}</p>
        </div>
    )
}

//3.
    /* Numbers props */
const Numbers = (props) => {
    return <div>Score: {props.value}</div>
}

//4.
    /* Button */
const Button = () => {
    const handleClick = () => {
        console.log("Button clicked")
    }
    return (
        <>
            <h1>Clickea el boton</h1>
            <button onClick={handleClick}>Tocame</button>
            <br />
            <br />
            <button onClick={() => console.log("hi")}>Tocame</button>  {/* Para que funcione el console.log es necesario que tenga una funcion flecha */}
        </>
    )
}

export default Main;