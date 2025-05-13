import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen' style={{background:color}}> 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor("maroon")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"maroon"}}>Maroon</button>
        <button onClick={() => setColor("lightgreen")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"lightgreen"}}>Lightgreen</button>
        <button onClick={() => setColor("darkblue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"darkblue"}}>Darkblue</button>
        <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
        <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
        <button onClick={() => setColor("skyblue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"skyblue"}}>Skyblue</button>
        <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
      </div>
    
    </div>
    
      </div>
  )
}

export default App
