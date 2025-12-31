import React from 'react'

const User = (props) => {
    let bg1 = Math.floor(Math.random()*256)
    let bg2 = Math.floor(Math.random()*256)
    let bg3 = Math.floor(Math.random()*256)
  return (
    <div className='w-[300px] rounded-2xl p-1 bg-white border '>
        <div className='rounded-2xl w-full px-2 py-5' style={{backgroundColor:`rgb(${bg1},${bg2},${bg3})`}}>
            <div className='flex w-full justify-between'>
                <button className='rounded-full px-5 py-2 bg-white'>24,may2025</button>
                <span className='bg-white rounded-full w-10 h-10 text-2xl flex items-center justify-center '>+</span>
            </div>
            <h3 className='mt-3 text-lg font-semibold text-white'>{props.elem.company.name}</h3>
            <h2 className='text-2xl font-bold text-white mb-10'>{props.elem.name}</h2>
            <span className='text-md bg-white rounded-full px-5 py-2 '>{props.elem.username}</span>
        </div>

        <div className='p-2 flex
        justify-between items-end'>
            <p className='text-sm font-semibold'>{props.elem.address.city}</p>
            <button className='bg-black px-5 py-2 rounded-full text-white mt-3'>Details</button>
        </div>
    </div>
  )
}

export default User