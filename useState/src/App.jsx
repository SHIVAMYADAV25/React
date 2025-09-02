import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count , setCount] = useState(0);

    function addCount(){
      setCount(count + 1)
    }

    function minusCount(){
      setCount(count - 1)
    }

  return (
    <>
      <h3>hii my name is shivam , the click of below button are getting counted</h3>
      <div className="card">
        <button onClick={addCount}>
          count Add
        </button>

        <button onClick={minusCount}>
          count Minus
        </button>
      </div>
      <h2>Total Count {count}</h2>
    </>
  )
}

export default App
