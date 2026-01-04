import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <h1>Product page</h1>

        <div className='flex gap-5 '>
          <Link to={"/product/men"} className='text-2xl'>Mens product</Link>
          <Link to={"/product/women"} className='text-2xl'>womens product</Link>
        </div>
    </div>
  )
}

export default Product