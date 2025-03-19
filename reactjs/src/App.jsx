
export default function App(){
  return(
  <>
   <form className="new-item-form">
    <label htmlFor="item">New Item</label>
    <input type="text" id="item" />
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo list</h1>
  <ul className="list">
    <label><input type="checkbox" name="" id="" />
    Item
    </label>
    <button className="btn btn-danger">Delete</button>
  </ul>
  <ul className="list">
    <label><input type="checkbox"/>
    Item
    </label>
    <button className="btn btn-danger">Delete</button>
  </ul>
  </>
)}