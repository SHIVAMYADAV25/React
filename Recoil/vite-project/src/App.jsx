import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil"
import { counterAtom } from './Store/Atom/Counter.js'

function App() {

  return (
    <>
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
    </>
  )
}

function Counter(){
  return (
    <>
      <Value/>
      <Increment/> 
      <Decrement/>
    </>
  )
}

function Value(){
  let count = useRecoilValue(counterAtom)
  return(
    <pre>{count}</pre>
  )
}

function Increment(){
  let setValue = useSetRecoilState(counterAtom)
  function inc(){
    setValue(c => c + 1);
  }
  return(
    <button onClick={inc}> Increment</button>
  )
}

function Decrement(){
  let setValue = useSetRecoilState(counterAtom)
  function dec(){
    setValue(c => c - 1);
  }
  return(
    <button onClick={dec}> Decrement</button>
  )
}

export default App
