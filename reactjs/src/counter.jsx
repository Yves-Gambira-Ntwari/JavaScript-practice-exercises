import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0)

  const increament = () => {
    setCount(count + 1)
  }

  const decreament = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const [name, setName] = useState("")
  const handClickChange = (e) =>{
    setName(e.target.value)
  }

  return (
    <>
    <input type="text" value
    ={name} onChange={handClickChange} id="" />
    <p>Name: {name}</p>
      <div className="counter">
        <h1>{count}</h1>
      </div>
      <div className="decreament">
      <button onClick={decreament}>Decreament</button>
    </div>
    <div className="resert">
      <button onClick={reset}>Resert</button>
    </div>
    <div className="increament">
      <button onClick={increament}>Increament</button>
    </div>
    </>
  )

}