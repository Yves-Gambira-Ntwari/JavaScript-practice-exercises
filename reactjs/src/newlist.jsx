import { useEffect } from "react";
import { useState } from "react"

export default function ToDoList() {

  const [items, setItems] = useState(["Orange"]);
  const [newTask, setNewTask] = useState("")
  const [isChecked, setIsChecked] = useState([])


  function deleteTask(index) {
    setItems(items.filter((_, i) => i !== index))
  }
  function handleInput() {
    setNewTask(event.target.value)
  }

  function addItems() {
    if (newTask.trim() != "") {
      setItems(task => [...task, newTask])
    }
  }

  function checkDone(index) {

    if (isChecked.includes(index)) {
      const t = isChecked.filter((val) => index !== val)
      setIsChecked(t)
      console.log(isChecked)
    }
    if (!isChecked.includes(index)) {
      setIsChecked((prev) => [...prev, index]);

    }
  }

  useEffect(() => {
    console.log(isChecked)
  }, [isChecked])
  return (
    <>
      <div className="mylist">
        <input type="text" placeholder="Enter Item..." onChange={() => handleInput()} /> <button onClick={() => addItems()}>Add</button>
        <ul>
          {items.map((item, index) =>
            <li key={index}><span className={isChecked.includes(index) ? "add-line" : "remove-line"}>{item}</span> <input type="checkbox" checked={isChecked.includes(index)} onChange={() => checkDone(index)} /> <button onClick={
              () => deleteTask(index)}>Delete</button></li>)}
        </ul>
      </div>
    </>
  )
}