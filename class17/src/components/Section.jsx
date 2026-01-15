import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/Themecotext'   
const Section = () => {
    const [themedata, setthemedata] = useContext(ThemeContext)
  return (
    <div>Section--
    {themedata}
    </div>
  )
}

export default Section