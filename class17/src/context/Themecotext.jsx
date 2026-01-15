import React, { createContext } from 'react'
import { useState } from 'react'
export const ThemeContext = createContext()

const Themecotext = (props) => {
    const [themedata, setthemedata] = useState("dark mode")
  return (
    <div>
        <ThemeContext.Provider value={[themedata, setthemedata]}>
        {props.children}
        </ThemeContext.Provider>
    </div>
  )
}

export default Themecotext