export default function NavBar({onOpen}) {
  return (
    <>
      <nav>
        <div className="header">
          <h1>Project Name</h1>
        </div>
        <div className="search">
          <input type="search" name="" id="" />
        </div>
        <div className="button">
          <button onClick={onOpen}>Add Client</button>
        </div>
      </nav>
    </>
  )
}