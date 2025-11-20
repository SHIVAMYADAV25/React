import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { CounterAtom, evenSelector } from './Store/Atom/counterAtom'

function App() {

  return (
    <RecoilRoot>
    <Button/>
    <Counter/>
    <IsEven/>
    </RecoilRoot>
  )
}

function Button(){
  const setCount = useSetRecoilState(CounterAtom)
  function inc(){
    setCount(c=> c+2)
  }

  function dec(){
    setCount(c=> c- 1)
  }

  return(
    <div>
      <button onClick={inc}> Increase </button>
      <button onClick={dec}> Decrease </button>
    </div>
  )
}

function Counter(){
  let count = useRecoilValue(CounterAtom)
  return <div> {count} </div>
}

function IsEven(){
  let count = useRecoilValue(evenSelector)
  return <div> {count ? "Even" : "Odd"} </div>
}

export default App


// let count = useRecoilValue(CounterAtom) // only give value
// const setCount = useSetRecoilState(CounterAtom) // gives the setter 

// let [count , setCount] = useSetRecoilState(CounterAtom) // gives both the value and setter