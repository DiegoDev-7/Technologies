import { useState } from "react"

import Greeting from "./10ImportChild"
import { Component, Card, CardHeader, CardBody, CardFooter } from "./10ImportChild"
import ButtonColorPicker, { ColorPicker } from "./10PasarFunciones"

const App = () => {
    return (
        <>
            <Greeting>
                <h1>Soy un componente incrustado</h1>
                <p>Los componentes incrustados pueden ser llamados con una prop.children para poder llamar a todo el contiendo de el componente Greeting.</p>
            </Greeting>
            <hr />
            <Component gun="H416" bullets="5,56x45mm M995" />
            <hr />
            <Card>
                <CardHeader title="Titulo de la Card" />
                <CardBody content="Cuerpo de una Card" />
                <CardFooter author="Diego" />
            </Card>
            <hr />
            <SelectColorByButton />
            <hr />
            <Range />
        </>
    )
}


/* Button */
const SelectColorByButton = () => {
    const [selectedColor, setSelectedColor] = useState(undefined)
    const handleColorChange = (color) => {
        setSelectedColor(color)
    }

    return (
        <>
            <div>
                <h1>Color</h1>
                <p>Selecte color: {selectedColor}</p>
                <ButtonColorPicker onColorSelect={handleColorChange} />
            </div>
        </>
    )
}


/* Range */
const Range = () => {
    const [selectedColor, setSelectedColor] = useState(undefined)

    const handleColorChange = (color) => {
        setSelectedColor(color)
    }

    return (
        <>
            <div>
                <h1>Color</h1>
                <p>Selected color: {selectedColor || "None"}</p>
                <ColorPicker onColorSelect={handleColorChange} />
            </div>
        </>
    )
}

export default App