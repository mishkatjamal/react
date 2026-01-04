import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='w-full px-5 py-3 flex justify-between bg-red-500 '>
            <h1>Navbar</h1>
            <div className='flex gap-5'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar