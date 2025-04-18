import { useState } from "react"

export default function Calculator() {

  const [display, setDisplay] = useState("")

  function handleDispay(event) {
    setDisplay(event.target.value)
  }
  function equal() {

    try {
      setDisplay(eval(display).toString())
    }
    catch {
      setDisplay("error")
    }
  }
  function handleInput(num) {
    setDisplay((numbers) => numbers + num)
  }
  return (

    <>

      <div className="caltulator">
        <input type="text" className="display" placeholder="Calculator" value={display} onChange={handleDispay} />
        <div className="numbers">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("7")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("0")}>0</button>
        </div>
        <div className="signs">
          {/* <button onClick={() => Addition("+")}>+</button> */}
          <button onClick={() => handleInput("-")}>-</button>
          <button onClick={() => handleInput("*")}>*</button>
          <button onClick={() => handleInput("/")}>/</button>
          <button onClick={() => equal("=")}>=</button>
        </div>
      </div>
    </>
  )
}