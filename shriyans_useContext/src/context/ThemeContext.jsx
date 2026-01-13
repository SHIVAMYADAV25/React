import React, { createContext, useState } from 'react'

export const ThemeContextMode = createContext();

const ThemeContext = (props) => {

    const [mode,setMode] = useState("light");
    console.log(props)

  return (
    <ThemeContextMode.Provider value={[mode,setMode]} >
        {props.children}
    </ThemeContextMode.Provider>
  )
}

export default ThemeContext