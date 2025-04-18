import axios from 'axios'
import { useEffect, useState } from 'react'
export default function MyFetch() {
  const [data, setData] = useState([])
  const [loding, setLoding] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data)
        setLoding(false)
      })
      .catch((err) => {
        setLoding(true)
      })
  }, [])
  return (
    <>
      <li>{loding == true && "Loding..."}</li>
      {data.map((names) => <li key={names.id}>{names.id}</li>)}
    </>
  )
}