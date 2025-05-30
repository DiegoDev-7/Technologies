import { useLocation } from "react-router-dom"

const Region = () => {
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const term = query.get("search")
    const id = query.get("id")
    const name = query.get("nam") || "ERROR"      //Si no recibimos un parametro el valor predeterminado sera "dxvv"
    console.log(query, term, id, name)

    return (
        <>
            <h3>¡Bienvenido de nuevo {name}!</h3>
            <p>Estamos hubicados en la <em>{term}</em> con la id: {id}</p>
        </>
    )
}

export default Region