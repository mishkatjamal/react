import React from 'react'

const Herosec = () => {
  return (
    <div>
      <div className="herosec relative px-20 w-full flex justify-center items-center">
        <img className='h-[80vh] w-full object-cover rounded-4xl z-0' src="../src/assets/1.png" alt="" />

        <div className="hero-text absolute  flex flex-col justify-center items-center w-full">

          <h2 className='text-white text-7xl w-[60%] text-center'>Unleash Your Champion Today All In One Place</h2>

          <p className='text-white w-[50%] text-xl text-center mt-5'>Join the ultimate tennis experience where passion meet performance and every swimg brings you closer to victory</p>

          <button className='py-4 px-8 rounded-4xl bg-black text-white mt-5'>Start your journey</button>

        </div>

      </div>
    </div>
  )
}

export default Herosec