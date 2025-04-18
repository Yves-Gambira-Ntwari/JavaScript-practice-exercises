import React, { useState, useEffect } from "react"

export default function Mycounter() {
  const [count, setCount] = useState(0)
  const [color, setCoulor] = useState("green")
  useEffect(() => {
    document.title = `My counter: ${count}, ${color}`
  });
  function addCount() {
    let c = count;
    setCount(c = c + 1)

  }
  function subtractCount() {
    let c = count;
    setCount(c = c - 1)
  }

  function changeColor() {
    setCoulor(c => c === "green" ? "red" : "green")
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>subtract</button>
      <button onClick={changeColor}>Change color</button>
    </>

  )
}