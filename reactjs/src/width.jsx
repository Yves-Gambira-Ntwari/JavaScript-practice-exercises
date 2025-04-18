import { useEffect, useState } from "react";

export default function Width() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setheight] = useState(window.innerHeight)

  useEffect(() => {
    document.title = `Size ${width} x ${height}`
    window.addEventListener("resize", handleResize);
  })

  function handleResize() {
    setWidth(window.innerWidth)
    setheight(window.innerHeight)
  }

  return (
    <>
      <p>Screen Width: {width}px</p>
      <p>Screen height: {height}px</p>
    </>
  )
}