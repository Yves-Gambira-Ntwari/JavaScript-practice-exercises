import profilePic from './assets/WhatsApp Image 2025-01-09 at 16.45.30_8349b5e6.jpg'
export default function Card(){
  return (
    <div className="card">
      <img src={profilePic} alt="" className="card-image" height={160} width={150} />
      <h3 className='card-title'>Gambira Ntwari Yvea</h3>
      <p className='card-text'>I'm learning React js on Bro code youtube chanel</p>
    </div>
  )
}