import React from 'react'

const Card = (props) => {
  return (
    <div key={props.idx} className='flex flex-col rounded-xl shadow-lg w-[300px] p-3 justify-center items-center '>
              <img className='object-cover object-center h-30 w-30 rounded-full' src={props.e.imageurl}   />

              <h2 className='text-3xl font-semibold mt-2'>{props.e.username}</h2>
              <p className='text-lg mt-5'>{props.e.role}</p>
              <p className='text-center'>{props.e.description}</p>
              <button
              onClick={()=>{
                props.deleteUser(props.idx)
              }}
               className='text-white bg-red-400 rounded px-5 py-2 mt-3'>Remove</button>
            </div>
  )
}

export default Card