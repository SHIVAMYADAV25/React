import './App.css';
import {useEffect, useState} from "react";

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    
  })
  return (
    <>
      <Value/>
      <Increment/> 
      <Decrement/>
    </>
  )
}

function Value(){
  return(
    <pre>4</pre>
  )
}

function Increment(){
  function inc(){

  }
  return(
    <button onClick={inc}> Increment</button>
  )
}

function Decrement(){
  function dec(){

  }
  return(
    <button onClick={dec}> Decrement</button>
  )
}

export default App
