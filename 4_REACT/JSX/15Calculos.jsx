import { useState } from "react"

const Render = ({ nameGuns }) => {
    return (
        <>
            <App nameGuns={nameGuns} />
            <GunsList nameGuns={nameGuns} />
            <NumRandom />
        </>
    )
}

const App = ({ nameGuns }) => {
    const GunRandom = Math.floor(Math.random() * nameGuns.length)
    const g = nameGuns[GunRandom]
    const gun = useState(g)

    return (
        <>
            <div>
                <p>Tu arma es una: {gun}</p>
            </div>
        </>
    )
}


const GunsList = ({ nameGuns }) => {
    const gun = useState(nameGuns)

    return (
        <>
            <div>
                <ul>
                    {gun.map((armas, index) => (
                        <li key={index}>{armas}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const NumRandom = () => {
    const random = useState(Math.round(Math.random() * 100))

    return (
        <>
            <p>Numero random: {random}</p>
        </>
    )
}

export default Render
