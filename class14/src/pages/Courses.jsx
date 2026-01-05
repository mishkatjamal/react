import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <div>
            <h2 className='bg-red-400 text-white text-2xl'>sale sale sale</h2>
        </div>
       <div>
         <h1 className='absolute left-1/2 top-1/2 -translate-1/2 text-5xl'>Courses page</h1>

        <Outlet/>
       </div>
    </div>
  )
}

export default Courses