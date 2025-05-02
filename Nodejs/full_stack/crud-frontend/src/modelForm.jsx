import { useEffect, useState } from "react"

export default function ModelForm({ isOpen, onClose, model, onSubmit }) {

  const [rate, setRate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [job, setJob] = useState('')
  const [status, setStatus] = useState(true)

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }
  return (
    <>
      <dialog open={isOpen}>
        <div>
          <h3>{model === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
          <form action="dialog" onSubmit={handleSubmit}>
            <label htmlFor="">
              Name:
              <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
            </label> <br />
            <label htmlFor="">
              Email:
              <input type="text" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label> <br />
            <label htmlFor="">
              Job:
              <input type="text" name="" id="" value={job} onChange={(e) => setJob(e.target.value)} />
            </label> <br />
            <div>
              <label htmlFor="">
                Rate:
                <input type="number" name="" id="" value={rate} onChange={(e) => setRate(e.target.value)} />
              </label>
              <br />
              <select name="" id="" value={status ? 'Active' : 'Inactive'} onChange={handleStatusChange}>
                <option value="">Inactive</option>
                <option value="">Actice</option>
              </select>

            </div>

            <button>{model === 'edit' ? 'Save changes' : 'Add Client'}</button>
          </form>
        </div>
      </dialog>
    </>
  )
}