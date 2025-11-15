import React, { useState } from 'react'
import Button from "./components/Button"

const App = () => {
  const [count , setCount] = useState(0);

  function handlePrimaryClick(){
    setCount(1+count);
  }

  function handleOutlineClick(){
    alert("outline button clicked")
  }
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Button Demo</h1>

      <div style={{ marginBottom: 12 }}>
        <strong>Clicks:</strong> {count}
      </div>

      <div style={{ gap: 8, display: "flex", alignItems: "center" }}>
        {/* Primary medium button that increments counter */}
        <Button variant="primary" size="medium" onClick={handlePrimaryClick}>
          Primary1
        </Button>

        {/* Outline small button that shows an alert */}
        <Button variant="outline" size="small" onClick={handleOutlineClick}>
          Outline2
        </Button>

        {/* Disabled button — clicking should do nothing */}
        <Button variant="primary" size="medium" disabled={true} onClick={() => setCount(999)}>
          Disabled3
        </Button>
      </div>
    </div>
  )
}

export default App