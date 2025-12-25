import React from 'react'
import { Button } from './Button'

const Navbar = () => {
  return (
    <div>

        <div className="nav-main flex justify-between items-center px-16 py-4  text-white z-50">
            {/* nav left */}
            <div className="nav-left z-50">
                <h4 className='text-3xl font-bold'>Folioblox<sup className='text-orange-500'>®</sup></h4>
            </div>
            {/* nav right */}
            <div className="nav-right flex gap-8 items-center z-50">
                <a className='text-lg text-semibold' href="#">Home</a>
                <a className='text-lg text-semibold' href="#">About</a>
                <a className='text-lg text-semibold' href="#">Project</a>

                <Button />
            </div>
            </div>

        </div>
  )
}

export default Navbar