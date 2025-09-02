import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <>
      {/* Background container */}
      <div className="h-screen transition-colors duration-500 flex items-center justify-center"
           style={{ backgroundColor: color }}>
        <h1 className="text-white text-3xl font-bold drop-shadow-lg">
          Background Changer
        </h1>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button onClick={() => setColor("darkred")}>Dark Red</button>
        <button onClick={() => setColor("darkblue")}>Dark Blue</button>
        <button onClick={() => setColor("darkgreen")}>Dark Green</button>
        <button onClick={() => setColor("darkviolet")}>Dark Violet</button>
        <button onClick={() => setColor("black")}>Black</button>
        <button onClick={() => setColor("maroon")}>Maroon</button>
        <button onClick={() => setColor("teal")}>Teal</button>
        <button onClick={() => setColor("darkorange")}>Dark Orange</button>
        <button onClick={() => setColor("darkslategray")}>Slate Gray</button>
      </div>
    </>
  )
}

export default App
