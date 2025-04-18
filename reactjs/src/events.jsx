export default function Event() {
  // const handleClick = () => console.log("OUCH!")
  // const handleClick2 = (name) => console.log(`${name} stop clicking me`)
  let count = 0;
  const handleClick2 = (name) =>{
    count++
    if(count < 3){
      console.log(`${name} you clicked me ${count} times`)
    } else{
      console.log(`${name} Stop clicking me it's enough`)
    }
  }
  const handleClick3 = (e) =>{
    console.log(e)
  }
  return (
    <>
    <button onClick={() => handleClick2("Bro")}>click Me 😀</button>
    <button onClick={(e) => handleClick3(e)}>Click me</button>
    </>
  )
}