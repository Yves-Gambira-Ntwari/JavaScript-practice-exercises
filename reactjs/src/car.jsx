import { useState } from "react";
export default function Car() {

  const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" })
  function handleYear(e){
    setCar({...car, year: e.target.value})
    console.log(car)
  }
  return (
    <>
      <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} id="" onChange={handleYear}/>
    </>
  )
}
