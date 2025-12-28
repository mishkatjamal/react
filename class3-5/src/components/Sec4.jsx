import React from 'react'

const Sec4 = () => {
  return (
    <div>
        <div className='px-16'>
                <div className='flex justify-between items-end h-screen w-full mt-15'>
                     <div className='right-text w-[35%] pb-20'>
                        <div className='h-2 w-full bg-[#FF5E00] rounded-2xl '></div>
                        <h4 className='text-4xl font-bold mt-15'>Orange Blox</h4>
                        <p className='text-gray-400 mt-3'>The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.</p>
                        <button className='rounded-full px-8 py-2 bg-[#FF5E00] text-white mt-3'>Get in touch</button>
                    </div>
                    <div className='left-img h-full w-[60%]'>
                        <img className='h-full w-full object-cover rounded-4xl' src="../src/assets/222.avif" alt="" />
                    </div>
                   
                </div>
            </div>
    </div>
  )
}

export default Sec4