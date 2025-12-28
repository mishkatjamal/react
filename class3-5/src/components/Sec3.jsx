import React from 'react'

const Sec3 = () => {
    return (
        <div>
            <div className='px-16'>

                <div className="bottom pt-50 px-16 flex justify-between items-center gap-50">
                    <div className="left w-[55%]">
                        <h3 className='text-4xl font-semibold text-[#FF5E00]'>Behind the Designs</h3>
                        <h2 className='text-6xl text-balance font-bold mt-5'>Shaping Experiences <br />That Make Life Simpler</h2>
                    </div>

                    <div className="right w-[45%]">
                        <div className="r-top">
                            <p className='text-3xl font-semibold'>With a passion for clarity, aesthetics, and emotion-driven design, I partner with founders and teams to create visual identities that truly connect.</p>
                        </div>

                    </div>
                </div>

                <div className='flex justify-between items-end h-screen w-full mt-15'>
                    <div className='left-img h-full w-[60%]'>
                        <img className='h-full w-full object-cover rounded-4xl' src="../src/assets/22.avif" alt="" />
                    </div>
                    <div className='right-text w-[35%] pb-20'>
                        <div className='h-2 w-full bg-[#FF5E00] rounded-2xl '></div>
                        <h4 className='text-4xl font-bold mt-15'>Dream Area</h4>
                        <p className='text-gray-400 mt-3'>The image shows flowing shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges, creating an ethereal effect.</p>
                        <button className='rounded-full px-8 py-2 bg-[#FF5E00] text-white mt-3'>Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec3