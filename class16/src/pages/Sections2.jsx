import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Sections2 = () => {
    const [theme,settheme] = useContext(ThemeContextData)
  return (
    <div>Sections2
        <h2 className='text-3xl'>{theme}</h2>
    </div>
  )
}

export default Sections2