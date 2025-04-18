export default function Login(props) {
  const welcomeMsg = <h2 className="success">Welcome to This website {props.isLoggedIn} </h2>
  const errorMsg = <h2 className="danger">Please sign in</h2>
  return (
    <>
      {props.isLoggedIn ? welcomeMsg : errorMsg}
    </>
  )
}