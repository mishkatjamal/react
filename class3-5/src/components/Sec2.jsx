import React from 'react'
import './trustedbrand.css'
import { Button } from './Button';
const Sec2 = () => {
  const logos = [
  "Ship Blox",
  "Supa Blox",
  "Hype Blox",
  "Ultra Blox",
  "Frame Blox",
];
  return (
    <div >
      <div className='bg-gray-100 h-90 z-0 -mt-30 w-full rounded-b-[100px]'>
        <div className='flex  justify-between items-end h-full pb-20 px-16'>
          <h4 className='text-black text-md font-bold'>Trusted by Brands I've<br/> Helped Shape</h4>

          <div className="brands-wrapper">
      <div className="brands-slider">
        <div className="brands-track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="brand-item" key={i}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>

        </div>
      </div>

      <div className="bottom pt-50 px-16 flex justify-between items-center gap-50">
        <div className="left w-[55%]">
          <h3 className='text-4xl font-semibold text-[#FF5E00]'>Behind the Designs</h3>
          <h2 className='text-6xl text-balance font-bold mt-5'>Shaping Experiences <br/>That Make Life Simpler</h2>
        </div>

        <div className="right w-[45%]">
          <div className="r-top">
            <p className='text-3xl font-semibold'>I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.</p>
          </div>

          <div className="r-bottom mt-10 flex justify-between items-center">
           <p className='text-gray-500 text-lg'>Let's Build Something Meaningful Together</p>
           <button className='rounded-full px-8 py-2 bg-[#FF5E00] text-white text-lg font-medium'>Get in touch</button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 px-16 mt-25 gap-10 pb-60 border-b-3 border-gray-300  mb-20'>
        <div className='h-100 rounded-4xl overflow-hidden'>
          <img className='h-full w-full object-cover' src="../src/assets/22.avif" alt="" />
        </div>
        <div className='h-100 rounded-4xl overflow-hidden'>
          <img className='h-full w-full object-cover' src="../src/assets/33.avif" alt="" />
        </div>
        <div className='h-100 rounded-4xl overflow-hidden'>
          <img className='h-full w-full object-cover' src="../src/assets/44.avif" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Sec2