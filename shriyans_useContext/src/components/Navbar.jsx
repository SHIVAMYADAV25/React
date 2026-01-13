import React, { useContext } from 'react'
import { ThemeContextMode } from '../context/ThemeContext'


const Navbar = () => {
    const [mode,setMode] = useContext(ThemeContextMode)
    // console.log(theme)

    function setTheme(){
        console.log("endar")
        if(mode == "light"){
            setMode("black");
        }else{
            setMode("light");
        }
    }

  return (
    <>
    <div>{mode}</div>
    <button onClick={()=>setTheme()}>Change Mode</button>
    </>
  )
}

export default Navbar