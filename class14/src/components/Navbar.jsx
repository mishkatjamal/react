import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Courses from '../pages/Courses'

const Navbar = () => {
  return (
    <div className='flex gap-5'>
        <NavLink to='/' style={({isActive})=>({color:isActive?"red":"black"})}>Home</NavLink>
        <NavLink to='/about' style={({isActive})=>({color:isActive?"red":"black"})}>About</NavLink>
        <NavLink to='/courses' style={({isActive})=>({color:isActive?"red":"black"})}>Courses</NavLink>
    </div>
  )
}

export default Navbar