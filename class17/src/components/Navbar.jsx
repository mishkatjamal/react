import React, { useContext } from 'react'
import { ThemeContext } from '../context/Themecotext'
const Navbar = () => {
    const [themedata, setthemedata] = useContext(ThemeContext)
  return (
    <div>Navbar-
    {themedata}
    <button onClick={() => setthemedata(themedata === "dark mode" ? "light mode" : "dark mode")}>Toggle Theme</button>
    </div>
  )
}

export default Navbar