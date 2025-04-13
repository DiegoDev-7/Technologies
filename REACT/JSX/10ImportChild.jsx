/* Hijos de un componente */
const Greeting = (props) => {
    return (
        <>
            <div>
                <blockquote>
                    <div>{props.children}</div>
                </blockquote>
            </div>
        </>
    )
}

/* Propiedades regulares */
export const Component = (props) => {
    return (
        <>
            <div>
                <blockquote>
                    <p>Favorite Gun: {props.gun}</p>
                    <p>Bullets: {props.bullets}</p>
                </blockquote>
            </div>
        </>
    )
}


//1.
    /* Desestructuracion */
//La Desestructuracion de children, no llama a ningun atributo simplemente muestra los hijos que estan dentro de el componente
export const Card = ({ children }) => {
    return <div>{children}</div>
}

//2.
    /* Titulo */
export const CardHeader = ({ title }) => {
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}

//3.
    /* Cuerpo */
export const CardBody = ({ content }) => {
    return (
        <>
            <p>{content}</p>
        </>
    )
}

//4.
    /* Final */
export const CardFooter = ({ author }) => {
    return (
        <>
            <small>- {author}</small>
        </>
    )
}

export default Greeting