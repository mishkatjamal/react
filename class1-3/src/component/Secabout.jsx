import React from 'react'

const Secabout = () => {
    return (
        <div>
            <div className="main px-20 mt-10 w-full h-full">
                <div className="sec-2-top flex justify-between items-start">
                    <div className="s-2t-left">
                        <button className='py-2 px-8 rounded-4xl bg-white text-black border border-gray-400'>About Horizon</button>
                    </div>
                    <div className="s-2t-right w-1/2">
                        <p className='text-2xl font-semibold'>At Horizon, we don’t just play tennis — we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.</p>
                    </div>
                </div>

                {/* center div */}
                <div className="sec-2-center grid grid-cols-3 gap-4 mt-10">
                    {/* box1 */}
                    <div className="s2-c-boxs h-60 bg-black rounded-4xl flex flex-col justify-center p-5">
                        <img className='w-10' src="../src/assets/t2.png" alt="" />
                        <p className='text-white text-xl mt-3'>Professional hard courts <span className='text-gray-500'>with tournament-grade lighting & climate control — play in perfect</span> conditions,in any season.</p>
                    </div>
                    {/* box2 */}
                    <div className="s2-c-boxs h-60 bg-[#F6F8FC] rounded-4xl overflow-hidden relative">
                        <img className='h-full w-full object-cover' src="../src/assets/3.jpg" alt="" />

                        <button className='py-4 px-8 rounded-4xl bg-[#ffffff30] text-white absolute top-1/2 left-[50%] -translate-x-[50%] -translate-y-[50%] whitespace-nowrap border border-white'>private & Group Lessons</button>
                    </div>
                    {/* box3 */}
                    <div className="s2-c-boxs h-60 bg-[#F6F8FC] rounded-4xl flex flex-col justify-center p-5">
                        <h3 className='text-5xl font-bold'>100+</h3>
                        <h4 className='text-xl'>Pro Coaches</h4>
                        <p className='text-gray-300'>Certified professionals ready to boost your game from first serve to tournament level.</p>
                        <div className='flex justify-between items-center mt-2 '>
                            <h4 className='text-bold text-xl'>Begginer</h4>
                            <div className='flex gap-2'>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                            </div>
                            <h5>55</h5>
                        </div>
                         <div className='flex justify-between items-center mt-2'>
                            <h4 className='text-bold text-xl'>Intermediate</h4>
                            <div className='flex gap-2'>
                                
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                            </div>
                            <h5>40</h5>
                        </div>
                         <div className='flex justify-between items-center mt-2'>
                            <h4 className='text-bold text-xl'>Advanced
</h4>
                            <div className='flex gap-2'>
                                
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                               
                            </div>
                            <h5>35</h5>
                        </div>
                        
                    </div>

                </div>

                {/* bottom div */}
                <div className=''>
                    <h3 className=' text-center mt-5 text-2xl'>A few More facts about us In Numbers</h3>

                    <div className='grid grid-cols-4 gap-4 mt-5'>
                        {/* box1 */}
                        <div className=' h-60 flex justify-center items-center flex-col'>
                            <h4 className='text-4xl'>12000 +</h4>
                            <p className='text-xl mt-2'>Hours of Play Annually</p>
                        </div>
                         {/* box2 */}
                        <div className=' h-60 flex justify-center items-center flex-col'>
                            <h4 className='text-4xl'>89 %</h4>
                            <p className='text-xl mt-2'>Player Retention Rate</p>
                        </div>
                         {/* box3 */}
                        <div className=' h-60 flex justify-center items-center flex-col'>
                            <h4 className='text-4xl'>1200 +</h4>
                            <p className='text-xl mt-2'>Active Members</p>
                        </div>
                         {/* box4 */}
                        <div className=' h-60 flex justify-center items-center flex-col'>
                            <h4 className='text-4xl'>125 +</h4>
                            <p className='text-xl mt-2'>Annual Tournaments

</p>
                        </div>
                       
                    </div>
                </div>

                {/* last div wala */}

                <div className='grid grid-cols-3 gap-10 pb-5'>
                    {/* box 1 */}
                    <div className='flex flex-col justify-between h-80'>
                         <div>
                            <button className='py-2 px-8 rounded-4xl bg-white text-black border border-gray-400'>Services</button>
                         <p className='text-xl mt-3'>Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we’ve got the right program for you.</p>
                         </div>
                         <button className='py-2 px-8 rounded-4xl bg-black text-white border border-gray-400 w-fit'>Services</button>
                    </div>
                    {/* box 2 */}
                     <div className="s2-c-boxs h-80 bg-[#F6F8FC] rounded-4xl overflow-hidden relative">
                        <img className='h-full w-full object-cover' src="../src/assets/4.jpg" alt="" />

                        <button className='py-4 px-8 rounded-4xl bg-[#ffffff30] text-white absolute top-1/2 left-[50%] -translate-x-[50%] -translate-y-[50%] whitespace-nowrap border border-white'>private & Group Lessons</button>
                    </div>
                     {/* box 3 */}

                     <div className='h-80 flex flex-col justify-between'>
                        <div className='flex flex-col justify-between h-1/2 bg-[url(../src/assets/5.jpg)] bg-cover bg-center rounded-4xl p-3'>
                            <button className='w-fit py-4 px-8 rounded-4xl bg-[#ffffff30] text-white whitespace-nowrap border border-white'>private & Group Lessons</button>
                            <h3 className='text-2xl text-white'>Hourly Court Rental</h3>
                        </div>
                        <p className='text-2xl'>Step into a space built for players — to grow, compete, and thrive.</p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Secabout