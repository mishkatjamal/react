import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from './components/User'
const App = () => {

  const [allusers, setallusers] = useState([])
  const getData = async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data);
    setallusers(response.data)
  }
  return (
    <div className='p-5 bg-black'>
      <button onClick={getData} className='bg-red-500 px-5 py-2 text-white'>click me</button>

     <div className='flex flex-wrap gap-5'>
      {allusers.map((elem,indx)=>{
        return <div key={indx}>
          <User elem={elem}/>
        </div>
      })}
     </div>
    </div>
  )
}

export default App