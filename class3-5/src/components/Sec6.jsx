import React from 'react'

const Sec6 = () => {
  return (
    <div>
        <div className='bg-white rounded-b-[100px] z-[100] -mb-50 relative'>
        <div className="bottom pt-50 px-16 flex justify-between items-center gap-50 z-10">
        <div className="left w-[55%]">
          <h3 className='text-4xl font-semibold text-[#FF5E00]'>Services

</h3>
          <h2 className='text-6xl text-balance font-bold mt-5 whitespace-nowrap'>What I Can Help You <br/>With</h2>
        </div>

        <div className="right w-[45%]">
          <div className="r-top">
            <p className='text-3xl font-semibold'>From strategy to visuals, I offer tailored services to help your brand grow with clarity and impact.</p>
          </div>

          <div className="r-bottom mt-10 flex justify-between items-center">
           <p className='text-gray-500 text-lg'>Let’s Build Something Meaningful Together</p>
           <button className='rounded-full px-8 py-2 bg-[#FF5E00] text-white text-lg font-medium'>Get in touch</button>
          </div>
        </div>
      </div>

      {/* boxes */}
      <div className='grid grid-cols-3 mt-25 gap-10 px-16 z-10 pb-20'>
        <div className='box bg-gray-100 h-100 rounded-4xl flex flex-col justify-between py-8 px-5'>
            <div className='bg-[#FF5E00] h-2 rounded-4xl'></div>
            <div>
                <h3 className='text-2xl font-semibold text-[#ff5e00]'>Your brand, visually defined.

</h3>
                <h2 className='text-4xl font-bold'>Brand Identity Design
</h2>
                <p className='mt-5 text-gray-400'>Logos, typography, color systems, and complete visual direction.

</p>
            </div>
        </div>
         <div className='box bg-gray-100 h-100 rounded-4xl flex flex-col justify-between py-8 px-5'>
            <div className='bg-[#FF5E00] h-2 rounded-4xl'></div>
            <div>
                <h3 className='text-2xl font-semibold text-[#ff5e00]'>Your brand, visually defined.

</h3>
                <h2 className='text-4xl font-bold'>Brand Identity Design
</h2>
                <p className='mt-5 text-gray-400'>Logos, typography, color systems, and complete visual direction.

</p>
            </div>
        </div>
         <div className='box bg-gray-100 h-100 rounded-4xl flex flex-col justify-between py-8 px-5'>
            <div className='bg-[#FF5E00] h-2 rounded-4xl'></div>
            <div>
                <h3 className='text-2xl font-semibold text-[#ff5e00]'>Your brand, visually defined.

</h3>
                <h2 className='text-4xl font-bold'>Brand Identity Design
</h2>
                <p className='mt-5 text-gray-400'>Logos, typography, color systems, and complete visual direction.

</p>
            </div>
        </div>
       
      </div>
      


    </div>

    <div className='h-screen w-full relative z-0'>
        <img className='h-full w-full object-cover absolute  top-0 left-0' src="../src/assets/last.avif" alt="" />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 text-center text-white z-10 px-16'>
            <h3 className='text-[#FF5E00] text-3xl font-bold'>Start Your Brand</h3>
            <h2 className='text-6xl font-bold'>Let’s Bring Your <br/>Brand to Life</h2>
            <p className='mt-2 text-xl'>Ready to make something amazing together? Whether you're starting fresh or evolving your brand, I'm here to help.</p>
             <button className='rounded-full px-8 py-2 bg-[#FF5E00] text-white text-lg font-medium mt-5'>Get in touch</button>
        </div>
    </div>
    </div>
  )
}

export default Sec6