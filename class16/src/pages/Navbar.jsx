import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'


const Navbar = () => {
    const [theme, settheme] = useContext(ThemeContextData);
  return (
    <div>Navbar
        <h2 className='text-2xl '>{theme}</h2>
        <button onClick={()=>{
            if(theme == "light"){
                settheme("dark")
            }else{
                settheme("light")
            }
        }}
        className='text-2xl p-5 bg-red-500 text-white'>Click</button>
    </div>
  )
}

export default Navbar