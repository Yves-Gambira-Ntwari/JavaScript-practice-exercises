import profilePic from './assets/WhatsApp Image 2025-01-09 at 16.45.30_8349b5e6.jpg'
export default function ProfilePicture() {
  const imagUrl = profilePic
  const handleClick = (e) => {
    e.target.style.display = "none";
    console.log(e)
  }
  return (
    <>
      <img src={imagUrl} onClick={(e) => handleClick(e)} alt="" className="card-image" height={160} width={150} />
      <p>hello</p>
    </>
  )
}