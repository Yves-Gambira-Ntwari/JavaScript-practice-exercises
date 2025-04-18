import { useState } from "react"

export default function ToDoList() {

  const [tasks, setTasks] = useState(["Orange", "Banana"])
  const [newTask, setNewTask] = useState("0")

  function inputChange(event) {
    setNewTask(event.target.value)

  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(task => [...task, newTask])
    }
  }
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))

  }

  function moveTaskUp(index) {
    const updateTask = [...tasks];
    [updateTask[index], updateTask[index - 1]] =
      [updateTask[index - 1], updateTask[index]];
    setTasks(updateTask)
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index + 1]] =
        [updateTask[index + 1], updateTask[index]]
      setTasks(updateTask)
    }

  }
  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <input type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={inputChange}
        />
        <button className="add-task" onClick={addTask}>Add</button>
        <ol>
          {tasks.map((task, index) => <li key={index}>{task}
            <button className="delete-task" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-up" onClick={() => moveTaskUp(index)}>👆</button>
            <button className="move-down" onClick={() => moveTaskDown(index)}>👇</button>

          </li>)}
        </ol>
      </div>
    </>
  )
}