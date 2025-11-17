
import './App.css'
import {useFetch} from "../hooks/useFetch.js"
import { useState } from 'react'


function App(){
  const [count,setCount] = useState(1)
  let {finalData , loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + count)
  // console.log(JSON.stringify(finalData, null, 2))

  return (
    <>
    <button onClick={() => setCount(1)}>1</button>
    <button onClick={() => setCount(2)}>2</button>
    <button onClick={() => setCount(3)}>3</button>
    {loading ? " data is getting fetch" : JSON.stringify(finalData)}
    </>
  )
}

export default App
