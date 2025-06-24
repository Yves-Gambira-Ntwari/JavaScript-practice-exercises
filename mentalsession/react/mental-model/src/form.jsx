import { useState } from "react"

export default function MyForm() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [users, setUsers] = useState([])
  function handleInput(event) {
    const { name, value } = event.target

    setData({
      ...data,
      [name]: value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    setUsers([...users,data])
    console.log(users)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" name="username" onChange={handleInput} value={data.username} />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" name="email" onChange={handleInput} value={data.email} />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={handleInput} value={data.password} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}