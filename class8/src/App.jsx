import React from 'react'
import { useState } from 'react'
const App = () => {
  // ! 1 wale ka hai
  // const [num, setnum] = useState(0)

  // ! 2 wala hai
  const [marks, setmarks] = useState([80, 20, 70, 10, 50]) 
  return (
   
    
    // ! second wala
    <div className='p-5'>
      <h2>{marks.map((e)=>{
        return <p className='text-xl'>{(e>33?"Pass":"Fail")},{e}</p>
      })}</h2>

      <button onClick={()=>{
        const newMarks = marks.map((e)=>{
          return e+5
        })
        setmarks(newMarks)
      }} className='px-5 py-2 bg-red-500 rounded-xl text-xl text-white'>increase by 5</button>
    </div>
  )
}

export default App