// import logo from "./images/logo.svg"
import woman from "./images/beach-work.jpg"
function App() {

  return (
    <>
      <div className="transition bg-[rgba(31,30,30,1)] p-4 flex overflow-auto -space-x-40 [&>*]:w-80 [&>*]:shrink-0 [&>*]:h-80 [&>*]:rounded-xl [&>*]:bg-gradient-to-r  
      [&>*]:from-[rgb(37,36,36)]  [&>*]:to-[rgb(0,0,0)] [&>*]:p-3 [&>*]:transition-all [&>*]:duration-300 [&>*:hover]:mr-5 [&>*:hover]:rotate-2 [&*>]:origin-top-right [&>*]:z-1
      [&>*]:shadow-[1px_2px_50px_30px_rgb(0,0,0)]">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i}>
        <p className="text-white mt-6">Article <span className="text-gray-500">on Jun 26 2025</span></p>
        <h1 className="text-white font-bold text-2xl mt-6">CSS Positions in Tailwind</h1>
        <p className="text-[rgb(242,88,32)] mt-6">Color</p>
        <div>
          <img className="rounded-full w-15 h-15 mt-5" src={woman} alt="" />
        </div>
          </div>
))}

      </div>
    </>
  )
}

export default App
