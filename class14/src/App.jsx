import React from 'react'
import Home from './pages/Home'
import { NavLink } from 'react-router-dom'
import About from './pages/About'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Koder from './pages/Koder'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/courses' element={<Courses/>}>
              <Route path='koder' element={<Koder/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default App