// import React, { useState, useEffect } from "react";
// export default function DigitalClock() {
//   const [time, setTime] = useState(new Date());
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date())
//       return () => {
//         clearInterval(intervalId)
//       }
//     }, 1000);
//   }, [])

//   function formatTime() {
//     let hours = time.getHours()
//     let minuts = time.getMinutes()
//     let seconds = time.getSeconds()
//     const meridiem = hours >= 12 ? "PM" : "AM"
//     hours = hours % 12 || 12

//     return `${hours}:${minuts}:${seconds} ${meridiem}`
//   }
//   return (
//     <>
//       <div className="clock-conteiner">
//         <div className="clock">
//           <span>{formatTime()}</span>
//         </div>
//       </div>
//     </>
//   )
// }

import React, { useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const intervalId = setInterval(() => {
    setTime(new Date())
  })
  function formatTime() {
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    hours = hours % 12

    return `${hours}: ${minutes} : ${seconds}`
  }
  return (
    <>
      <p>{formatTime()}</p>
    </>
  )
}