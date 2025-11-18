import { useEffect, useState } from 'react'
import './App.css'

function useDebounce(data){
  let [debounceValue,setDebounceValue] = useState();

  useEffect(()=>{
    const handle= setTimeout(()=>{
      console.log("run the settimeout")
      setDebounceValue(data)
    },300)

    return () =>{
      console.log("run the cleartimeout")
      clearTimeout(handle);
    }
  },[data]);

  return debounceValue;
}

function App() {

  const [data,setData] = useState();
  let debounce = useDebounce(data)
  // console.log(data)

  function Search(e){
    setData(e.target.value)
  }

  useEffect(()=>{
    console.log("expensive task")
  },[debounce])


  return (
    <>
      <input onChange={Search}></input>
      {debounce}
    </>
  )
}

export default App


// flow in debouncing
// expensive task
// run the settimeout

// (start writting then stop while writting the cleartimeout runs)
// 3 run the cleartimeout
//  run the settimeout
//  expensive task

// (same)
// 6 run the cleartimeout
//  run the settimeout
// expensive task

// (same)
// 11 run the cleartimeout
// run the settimeout
// expensive task



// laiman lang

// so onchnage the search function is getting called (it is storing the value of the data)
// then that data is given to the useDebounce hook 
//   (in which there is a use effect which runs when the data is changed)
//   in useffect there is two function one for actualy storing the data after some point of time in debounceValue
//   and other is returning the clearTimeout to cancle the timeout so that it does not run and change the value on realtime
//   at the end the debounValue is returned
// the in the App ther is another useEffect which runs on change in data of debounce
// so the expence task like data searching in data base can be run or request can be done
