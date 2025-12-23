import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="navbar flex justify-between items-center px-20 py-5">
                <div className="nav-left">
                    <h1 className='text-4xl font-bold'>Mishkat</h1>
                </div>

                <div className="nav-center flex gap-10">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact us</a>
                </div>

                <div className="nav-right">
                    <button className='py-4 px-8 rounded-4xl bg-black text-white'>Book now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar