import React from 'react'
import { useState } from 'react'
import Card from './components/Card.jsx'
const App = () => {

  const [username, setusername] = useState('')
  const [role, setrole] = useState('')
  const [imageurl, setimageurl] = useState('')
  const [description, setdescription] = useState('')

  const [alluser, setalluser] = useState([])

  const deleteUser = (idx)=>{
    const copyuser = [...alluser]
    copyuser.splice(idx,1)
    setalluser(copyuser)
  }
  return (


    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        setalluser([...alluser, { username, role, imageurl, description }])
        
        setusername('')
        setrole('')
        setimageurl('')
        setdescription('')


      }}>

        <input
          onChange={(elem) => {
            setusername(elem.target.value)
          }}
          value={username}
          className='w-[45%] px-5 py-2 bg-gray-200 rounded text-xl m-2 '
          type="text"
          placeholder='enter yourname' />

        <input
          onChange={(elem) => {
            setrole(elem.target.value)
          }}
          value={role}
          className='w-[45%] px-5 py-2 bg-gray-200 rounded text-xl m-2 '
          type="text"
          placeholder='enter role' />

        <input
          onChange={(elem) => {
            setimageurl(elem.target.value)
          }}
          value={imageurl}
          className='w-[45%] px-5 py-2 bg-gray-200 rounded text-xl m-2 '
          type="text"
          placeholder='enter image url' />

        <input
          onChange={(elem) => {
            setdescription(elem.target.value)
          }}
          value={description}
          className='w-[45%] px-5 py-2 bg-gray-200 rounded text-xl m-2 '
          type="text"
          placeholder='enter description' />

        <button className='w-[40%] px-5 py-3 m-2 text-xl font-bold bg-green-400 active:scale-95'
          type='submit'>Submit</button>

      </form>

      <div className='flex flex-wrap justify-start gap-4'>
        {alluser.map((e, idx) => {
          return <Card e={e} idx={idx} deleteUser={deleteUser}/>
          

        })}
      </div>
    </div>

  )
}

export default App