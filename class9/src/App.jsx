import React from 'react'
import { use } from 'react'
import { useState } from 'react'

export const App = () => {
 const [username, setusername] = useState("")

 const [email, setemail] = useState("")

 const [alluser, setalluser] = useState([])
  return (
    <div className='p-5'>
      <form onSubmit={(e)=>{
        e.preventDefault()
        const newUser = [...alluser]
        newUser.push({username,email})
        setalluser(newUser)
        setusername("")
        setemail("")
      }}>

        <input 
        required
        value={username}
        onChange={(e)=>{
         setusername(e.target.value)
          
        }} type="text" placeholder='Enter your name' />

   <input 
        required
        value={email}
        onChange={(e)=>{
         setemail(e.target.value)
          
        }} type="text" placeholder='Enter your email' />


        <button className='bg-green-400 text-white px-5 py-2'>Submit</button>
      </form>


      <div>
        {alluser.map((elem, index)=>{
          return <div key={index}>
            <h1 className='text-2xl'>{elem.username}</h1>
            <p className='text-xl'>{elem.email}</p>
          </div>
        })
        }
      </div>
    </div>
  )
}
export default App