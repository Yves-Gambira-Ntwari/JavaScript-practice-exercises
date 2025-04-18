import axios from "axios";
import { useEffect, useState } from "react";
export default function MyFetchl() {
  const [myData, setData] = useState([])
  const [search, setSearch] = useState()
  const [searchType, setSearchType] = useState("id")
  const i = 1;
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  function handleInput() {
    setSearch(event.target.value);
  }

  function handleChange() {
    setSearchType(event.target.value)
  }
  return (
    <>
      <div className="search">
        <select name="" id="" onChange={handleChange}> search type:
          <option value="id">Please select Seearch</option>
          <option value="id">id</option>
          <option value="title">Title</option>
          <option value="body">body</option>
        </select>
        <input type="text" placeholder={searchType} onChange={() => handleInput()} /><button>search</button>
      </div>
      <ul className="lists">

        {myData.map((name) => name.userId == search && <li key={name.id} className="fetch">
          <p>{name.userId}</p>
          <h3>{name.title}</h3>
          <p>{name.body}</p>
        </li>)}
        {myData.map((desc) => <li>{
          desc.body.split("")
        }</li>)}
      </ul>
    </>
  )
}