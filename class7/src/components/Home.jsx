import React from 'react'

const Home = (props) => {
  return (
    <div className='w-full h-full'>
        <div className='flex justify-between mt-5 bg-red-300 p-5'>
            <h2 className='text-2xl'>{props.user}</h2>

            <div className='flex gap-2'>
              {props.menu.map((elem,ind)=>{
                return <a key={ind} className='text-black' href="#">{elem}</a>
              })}
            </div>
        </div>
    </div>
  )
}

export default Home