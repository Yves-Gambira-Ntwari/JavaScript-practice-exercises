export default function TableList({ handleOpen }) {
  const clients = [
    { id: 1, name: "Gambira", email: "gambira@gmail.com", job: "Web Developer", rate: "100", isActive: false },
    { id: 2, name: "Ntwari", email: "ntwari@gmail.com", job: "Web Developer", rate: "100", isActive: false },
    { id: 3, name: "Yves", email: "yves@gmail.com", job: "Web Developer", rate: "100", isActive: true }
  ]
  return (
    <>
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
          {clients.map((client) =>
            <tr>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
              <td><button>{client.isActive == true ? 'Active' : 'Inactive'}</button></td>
              <td><button onClick={() => handleOpen('edit')}>Update</button></td>
              <td><button>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>


    </>
  )
}