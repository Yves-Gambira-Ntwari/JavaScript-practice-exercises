import { useState } from "react";

export default function FoodList() {
  const [foods, setFood] = useState(["Orange", "Apple", "Banana"])
  function AddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = ''
    console.log(newFood)
    setFood([...foods, newFood])
  }

  function removeFood(index){
    setFood(foods.filter((_, i) => i !== index))
  }

  return (
    <>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={() => removeFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={AddFood}>Add Food</button>
    </>
  )
}