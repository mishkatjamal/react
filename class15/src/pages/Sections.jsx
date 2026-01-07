import React, { use } from 'react'
import { useContext } from 'react'
import { UserContextData } from '../context/UserContext.jsx'
const Sections = () => {
  const data = useContext(UserContextData);
  

  return (
    <div>
        <h1 className='text-red-600'>{data[0].name}</h1>
    </div>
  )
}

export default Sections