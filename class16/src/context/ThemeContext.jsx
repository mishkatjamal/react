import React, { createContext } from 'react'
import { useState } from 'react'
export const ThemeContextData = createContext()

const ThemeContext = (props) => {
    const [theme, settheme] = useState("light");
    
  return (
    <div>
        <ThemeContextData.Provider value={[theme, settheme]}>
            {props.children}
        </ThemeContextData.Provider>
    </div>
  )
}

export default ThemeContext