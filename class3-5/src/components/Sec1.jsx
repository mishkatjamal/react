import React from 'react'

const Sec1 = () => {
  return (
    <div>
       <div  className="relative h-[110vh] bg-center bg-cover mt-[-12vh] rounded-b-[100px] flex flex-col justify-end pb-[5rem] px-16 overflow-hidden">
       <img className='w-full h-full object-cover absolute top-0 left-0 z-5' src="../src/assets/hero.avif" alt="" />
    {/* top */}
    <div className='flex justify-between z-10' >
        <div className="top-left">
            <h4 className='text-[#FF5E00] text-4xl'>Hey, I'm a</h4>
            <h2 className='mt-5 text-[8rem] font-bold leading-[8.2rem]  text-white'>Brand <br/>Designer</h2>
        </div>
        <div className="top-right w-[30%] flex flex-col justify-end">
            <h3 className='text-white text-3xl font-bold'>Great design should feel invisible.</h3>
            <p className='text-xl text-gray-300 mt-3'>From logo to language, I build brands that connect and convert.</p>
        </div>
    </div>

    {/* bottom */}
    <div className="bottom grid grid-cols-4 gap-8 mt-20 z-10">
        <div className="boxs">
            <p className='text-white text-xl'><span className='text-[#FF5E00]'>#</span>01</p>
            <h5 className='text-lg font-medium text-white mt-2'>Brand Strategy</h5>
        </div>
         <div className="boxs">
            <p className='text-white text-xl'><span className='text-[#FF5E00]'>#</span>02</p>
            <h5 className='text-lg font-medium text-white mt-2'>Brand Identity Design</h5>
        </div>
         <div className="boxs">
            <p className='text-white text-xl'><span className='text-[#FF5E00]'>#</span>03</p>
            <h5 className='text-lg font-medium text-white mt-2'>Packaging Design

</h5>
        </div>

         <div className="boxs">
            <p className='text-white text-xl'><span className='text-[#FF5E00]'>#</span>04</p>
            <h5 className='text-lg font-medium text-white mt-2'>Creative Direction</h5>
        </div>
       
    </div>
  </div>
    </div>
  )
}

export default Sec1