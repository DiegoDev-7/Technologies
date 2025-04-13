import "../src/06Box.css"

/* Primera forma de nombrar a los atributos */
const Boxes = (props) => {
    let boxClass = "box"

    if (props.size === "small") {
        boxClass = "box box--small"
    } else if (props.size === "medium") {
        boxClass = "box box--medium"
    } else if (props.size === "large") {
        boxClass = "box box--large"
    }

    return (
        <>
            <div className={boxClass}>
                <span>{props.size}</span>
            </div>
        </>
    )
}

/* Segunda forma de nombrar a los atributos */
export const Text = (props) => {
    const sizeClass = `text-${props.textsize}`

    return (
        <>
            <p className={sizeClass}>Text</p>
        </>
    )
}

/* Estilos en la misma hoja */
export const Estilos = () => {
    const divStyle = { width: "50px", height: "50px", background: "red", margin: "20px" }

    return (
        <>
            <button style={{ color: "white", background: "black", borderRadius: "30px", padding: "10px"}}>ClickMe</button>
            <br />
            <div style={divStyle}></div>
        </>
    )
}

export default Boxes