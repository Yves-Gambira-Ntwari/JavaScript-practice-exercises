import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff")
  function handleColor(e){
    setColor(e.target.value)
  }
  return (
    <>
      <div className="color-picker-conteiner">
        <h1>Color Picker</h1>
        <div className="color-display">
          <p style={{backgroundColor: color}}>Selected color: {color}</p>
          <label htmlFor="">Select Color</label>
          <input type="color" value={color} onChange={handleColor} />
        </div>
      </div>
    </>
  )
}