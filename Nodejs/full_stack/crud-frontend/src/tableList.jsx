import { useEffect, useState } from "react"
import { fetchClientApi, createClientApi, updateRouterApi, deleteRouterApi } from "./API"
import ModelForm from "./modelForm"
export default function TableList() {
  const [clients, setClient] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    id: null, name: "", email: "", job: "", rate: "", isactive: ""
  })

  const getClients = async () => {
    const { data } = await fetchClientApi()
    console.log(data)
    setClient(data)
  }


  useEffect(() => {
    getClients()
  }, [])

  function handleEdit(client) {
    setFormData(client)
    setShowForm(true)
  }
  async function handleSubmit(e) {
    e.preventDefault()
    if (formData.id) {
      // update
      console.log(formData)
      console.log('update')
      const data = await updateRouterApi(formData)
      console.log(data)
    } else {
      // create
      const data = await createClientApi(formData)
      console.log(data, "test")

    }


  }

  function handleInput(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

async  function handleDelete(id){
    console.log(id)
    deleteRouterApi(id)
  }


  return (
    <>
      {showForm && < ModelForm formData={formData} handleInput={handleInput} handleSubmit={handleSubmit} />}
      <div className="button">
        <button onClick={() => setShowForm((prev) => !prev)}>Add Client</button>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) =>
            <tr key={index}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
              <td>{client.isactive ? "Active" : "Inactive"}</td>
              <td><button onClick={() => handleEdit(client)}>Update</button></td>
              <td><button onClick={() =>handleDelete(client.id) }>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>


    </>
  )
}