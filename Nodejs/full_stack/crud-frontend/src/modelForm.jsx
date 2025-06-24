
export default function ModelForm({formData, handleInput, handleSubmit}) {
  return (
    <>
        <div>
          <h3>Add Clients</h3>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
              Name:
              <input type="text" name="name" id="" value={formData.name}  onChange={handleInput}/>
            </label> <br />
            <label htmlFor="">
              Email:
              <input type="text" name="email" id="" value={formData.email}  onChange={handleInput} />
            </label> <br />
            <label htmlFor="">
              Job:
              <input type="text" name="job" id="" value={formData.job}  onChange={handleInput} />
            </label> <br />
            <div>
              <label htmlFor="">
                Rate:
                <input type="number" name="rate" id=""value={formData.rate}  onChange={handleInput} />
              </label>
              <br />
              <select name="isactive" id="" value={formData.isactive}  onChange={handleInput}>
                <option value="FALSE">Inactive</option>
                <option value="TRUE">Actice</option>
              </select>

            </div>

            <button>Add Client</button>
          </form>
        </div>
    </>
  )
}