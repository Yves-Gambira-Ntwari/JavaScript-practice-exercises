import Footer from "./footer"
import Header from "./heade"
import Food from "./food"
import Card from "./card"
import Button from "./button/button"
import Students from "./students"
import Login from "./Login"
import List from "./List"
import Event from "./events"
import ProfilePicture from "./profile-picture"
import MyComponent from "./counter"
import Counter from "./counter"
import ColorPicker from "./color"
import Car from "./car"
import FoodList from "./foodList"
import ToDoList from "./newlist"
import Calculator from "./calculator"
import Mycounter from "./effect"
import Width from "./width"
import DigitalClock from "./clock"
import MyFetch from "./fetch"
import MyFetchl from "./myfetch"
export default function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Students name="Gambira" age={20} isStudent={true} />
      <Students name="Cyubahiro" age={20} isStudent={false} />
      <Login isLoggedIn={true} usename="Gambira" />
      <Food />
      <Card />
      <Card />
      <Button />
      <div>
        <List />
      </div>
      <Event />
      <Counter />
      <ColorPicker />
      <Car />
      <FoodList />
      <ToDoList />
      <Mycounter />
      <Width />
      <DigitalClock /> */}
      {/* <MyFetch /> */}
      {/* <Calculator /> */}
      {/* <ToDoList /> */}
      <MyFetchl />
      <Footer />
    </>
  )
}

































// import { useState } from "react"
// export default function App() {
//   const [newItem, setNewItem] = useState("yes")
//   const [todos, setTodos] = useState([])

//   function handlesubmit(e) {
//     e.preventDefault()
//     setTodos(currentTodos => {
//       return [
//         ...currentTodos,
//         { id: crypto.randomUUID(), title: newItem, complete: false }
//       ]
//     })
//   }
//   function toggleTodo(id, complete) {
//     setTodos(currentTodos => {
//       return currentTodos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, complete }
//         }
//         return todo
//       })
//     })
//   }

//   function deleteTodo(id) {
//     setTodos(currentTodos => {
//       return currentTodos.filter(todo => todo.id != id)
//     })
//   }

//   return (
//     <>
//       <form onSubmit={handlesubmit} className="new-item-form">
//         <label htmlFor="item">New Item</label>
//         <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id="item" />
//         <button className="btn">Add</button>
//       </form>
//       <h1 className="header">Todo list</h1>
//       <ul className="list">
//         {todos.length === 0 && "No Todos"}
//         {todos.map(todo => {
//           return (
//             <li key={todo.id}>
//               <label><input type="checkbox" checked={todo.complete}
//                 onChange={e => toggleTodo(todo.id, e.target.checked)} name="" id="" />
//                 {todo.title}
//               </label>
//               <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
//             </li>
//           )
//         })}

//       </ul>

//     </>
//   )
// }