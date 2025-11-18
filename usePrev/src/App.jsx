import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { usePrev } from './hooks/usePrev';

function App() {
  const [count , setCount] = useState(0);
  let value = usePrev(count);

  function inc(){
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={inc}> inx {count}</button>
      {value}
    </>
  )
}

export default App
