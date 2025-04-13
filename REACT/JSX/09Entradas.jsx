import { useState } from "react"

const App = () => {
    return (
        <>
            <Input />
            <hr />
            <TextArea />
            <hr />
            <Select />
            <hr />
            <Checked />
            <hr />
            <Radio />
            <hr />
            <Controlados />
        </>
    )
}


//1.
    /* Input */
const Input = () => {
    const [inputValue, setInputValue] = useState("")
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <>
            <div>
                <h2>Input</h2>
                <input placeholder="Enter username..." onChange={handleChange} />
                <p>Your entered: {inputValue}</p>
                <p>Character count: {inputValue.length}</p>
                {inputValue.length > 5 ? <p>Username length is valid</p> : <p>Username must be between 5 and 15 characters.</p>}
                {inputValue.length > 5 && <p>Too many characters</p>}
            </div>
        </>
    )
}

//2.
    /* Area de texto */
const TextArea = () => {
    const [text, setText] = useState("")
    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <h2>TextArea</h2>
                <textarea placeholder="Enter text..." onChange={handleChange} />
                <p>Characters: {text.length}</p>
            </div>
        </>
    )
}

//3.
    /* Select */
const Select = () => {
    const [activity, setActivity] = useState("Reading")
    const updateActivity = (event) => {
        setActivity(event.target.value)
    }

    return (
        <>
            <div>
                <h2>Select</h2>
                <select value={activity} onChange={updateActivity}>
                    <option value="">Select an activity</option>
                    <option value="Reading">Reading</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Cooking">Cooking</option>
                </select>
                <p>You enjoy {activity}!</p>
            </div>
        </>
    )
}

//4.
    /* checked */
const Checked = () => {
    const [subscribed, setSubscribed] = useState(true)

    const toggleSubscription = () => {
        setSubscribed(!subscribed)
    }

    return (
        <>
            <div>
                <h2>Checkbox</h2>
                <label>
                <input type="checkbox" checked={subscribed} onChange={toggleSubscription} />{" "}
                Task Completed
                </label>
                <p>Task are: {subscribed ? "subscribed" : "not subscribed"}. </p>
            </div>
        </>
    )
}

//5.
    /* Radio */
const Radio = () => {
    const [color, setColor] = useState("Red")
    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return (
        <>
            <div>
                <h2>Radio</h2>
                <label>
                    <input type="radio" value="Red" checked={color === "Red"} onChange={handleColorChange} />
                    Red
                </label>
                <label>
                    <input type="radio" value="Green" checked={color === "Green"} onChange={handleColorChange} />
                    Green
                </label>
                <p>Your favorite color: {color}</p>
            </div>
        </>
    )
}


//6.
    /* Controlados */
const Controlados = () => {
    const [favoriteCharacter, setFavoriteCharacter] = useState("nobody")
    const handleInputChange = (event) => {
        setFavoriteCharacter(event.target.value)
    }

    const [hobby, setHobby] = useState("")
    const updateHobby = (event) => {
        setHobby(event.target.value)
    }

    return (
        <>
            <div>
                <h2>Controlados</h2>
                <input value={favoriteCharacter} onChange={handleInputChange} />
                <p>Your favorite character is {favoriteCharacter}!</p>
            </div>
            <div>
                <input type="text" value={hobby} onChange={updateHobby} placeholder="Enter favorite hobby" />
                <p>Your favorite hobby is {hobby || "?"}</p>
            </div>
        </>
    )
}

export default App