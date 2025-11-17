import { useState } from 'react'
import './App.css'

// createing CUSTOM HOOK
  function useCounter(){
    const [count,setCount] = useState(0);

    function increase(){
      setCount(count + 1);
    }

    return{
      increase : increase,
      count : count
    }
  }


function App() {

  return (
    <>
      <Counter/>
      <Counter1/>
    </>
  )
}

function Counter(){
  const {count , increase} = useCounter();

  return(
    <button onClick={increase}> Increase(1) {count}</button>
  )

}

function Counter1(){
  const {count , increase} = useCounter();

  return(
    <button onClick={increase}> Increase(2) {count}</button>
  )

}

export default App
