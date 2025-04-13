import { useState } from "react"

/* Arrays y objetos */
const App = () => {
    const gunsList = ["M4A1", "H416", "MK14", "QBZ-95", "M110", "FAL", "MDR", "F2000", "AR57", "RPK16"]

    return (
        <>
            <div>
                <Greeting 
                    name="Diego"
                    location="Colombia"
                    age={20}
                    nice={true}
                    friends={["Brayan", "Arturo", "Evelyn"]}
                    description={{title: "El Silencio", hobby: "Play VideoGames"}}
                />
            </div>
            <hr />
            <div>
                <Guns nameGuns={gunsList}/>
            </div>
            <hr />
            <div>
                <GunsKeys nameGuns={gunsList} />
            </div>
            <hr />
            <div>
                <GunsKeys2 nameGuns={gunsList} />
            </div>
            <hr />
            <div>
                <Toolbox />
            </div>
            <hr />
            <div>
                <Toolbox2 />
            </div>
        </>
    )
}


//1.
    //props nombradas
const Greeting = ({ name, location, age, nice, friends, description }) => {
    return (
        <>
            <h1>Hi, {name}!</h1>
            <p>You&aposre from {location}.</p>
            <p>You&aposre {age} years old.</p>
            <p>Are you nice? {String(nice)}</p>
            <p>Your friends: {friends.join(", ")}</p>
            <p>Your title: {description.title}</p>
            <p>Your Hobby: {description.hobby}</p>
        </>
    )
}

//2.
    /* Objetos */
const Guns = (props) => {
    const balas = ["7.62x39mm AP", "5.56x45mm M855A1", "5.56x45mm M995", "9x19mm 7N31", "7.62x51mm M61", "7.62x51mm M62", "5.7x28mm SS190", "9x39mm 7N12", "5.45x39mm BS", "5.7x28mm SS198s"]
    return (
        <>
            <h3>GUNS</h3>
            <ul>
                {props.nameGuns.map((nameGun, index) => (
                    <li key={index}>{nameGun}</li>
                ))}
            </ul>
            <h3>BULLETS</h3>
            <ul>
                {balas.map((ammo) => (
                    <li key={ammo}>{ammo}</li>
                ))}
            </ul>
        </>
    )
}

//3.
    /* Objetos con keys */
const GunsKeys = (props) => {
    return (
        <>
            <h3>GUNS</h3>
            <ul>
                {props.nameGuns.map((keyNameGun, index) => (
                    <li key={index}>{keyNameGun}</li>
                ))}
            </ul>
        </>
    )
}
const GunsKeys2 = ({ nameGuns }) => {
    return (
        <>
            I have{" "}
            {nameGuns.map((item, index) => (
                <span key={index}>
                    {item}{index < nameGuns.length - 1 ? ", " : ""}
                </span>
            ))}{". "}
            My guns
        </>
    )
}

//4.
    /* Arrays */
const Toolbox = () => {
    const [tools, setTools] = useState([])
    const heroes = ["batman", "superman", "wonder woman"]

    const addTool = () => {
        if (tools.length < heroes.length) {
            setTools([...tools, heroes[tools.length]])
        }
    }
    return (
        <>
            <h1>My tools</h1>
            <ol>
                {tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                ))}
            </ol>
            {tools.length < heroes.length && (
                <button onClick={addTool}>Add Hero</button>
            )}
        </>
    )
}
const Toolbox2 = () => {
    /* Ejemplo 2 */
    const [favorites] = useState(["batman", "Wonder Woman", "Superman"])

    return (
        <>
            <h1>Favorite Superheroes</h1>
            <ul>
                {favorites.map((heroes, index) => (
                    <li key={index}>{heroes}</li>
                ))}
            </ul>
        </>
    )
}

export default App
