import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import Allcourse from './pages/Allcourse'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<Allcourse/>}/>

        {/* not found page */}
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App