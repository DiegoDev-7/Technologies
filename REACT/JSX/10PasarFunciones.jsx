import { useState } from "react"

/* Buttons */
const ButtonColorPicker = (props) => {
    const colors = ["Red", "Green", "Blue"]

    return (
        <>
            {colors.map((color) => (
                <button key={color} onClick={() => props.onColorSelect(color)}>
                    {color}
                </button>
            ))}
        </>
    )
}

/* Range */
export const ColorPicker = (props) => {
    const [selectedColor, setSelectedColor] = useState("H416")
    const handleSliderChange = (value) => {
        const guns = ["H416", "M4A1", "FAL", "AEK", "MK14"]
        const index = Math.round(value)
        const color = guns[index]

        setSelectedColor(color)
        props.onColorSelect(color)
    }

    return (
        <>
            <label>Select Color:
                <input 
                type="range" 
                min="0"
                max="4"
                step="1"
                value={["H416", "M4A1", "FAL", "AEK", "MK14"].indexOf(selectedColor)}
                onChange={(e) => handleSliderChange(e.target.value)}
                />
            </label>
        </>
    )
}

export default ButtonColorPicker