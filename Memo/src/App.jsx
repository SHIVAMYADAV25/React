// import './App.css';
// import {useEffect, useState,memo} from "react";

// function App() {

//   return (
//     <>
//       <Counter/>
//     </>
//   )
// }

// function Counter(){
//   const [count,setCount] = useState(0);

//   useEffect(()=>{
//     setInterval(()=>{
//       setCount(c=>c+1);
//     },3000)
//   },[])
//   return (
//     <>
//       <Value/>
//       <Increment/> 
//       <Decrement/>
//     </>
//   )
// }

// const Value = memo(function(){
//   return(
//     <div>3</div>
//   )
// })

// const Increment = memo(function (){
//   function inc(){

//   }
//   return(
//     <button onClick={inc}> Increment</button>
//   )
// })

// const Decrement = memo(function (){
//   function dec(){

//   }
//   return(
//     <button onClick={dec}> Decrement</button>
//   )
// })

// export default App


import { useState, memo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("App rendered");

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <br /><br />

      <input
        placeholder="Type something..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <NormalChild />
      <MemoChild />
    </>
  );
}

function NormalChild() {
  console.log("NormalChild rendered");
  return <div>Normal Child</div>;
}

const MemoChild = memo(function MemoChild() {
  console.log("MemoChild rendered");
  return <div>Memo Child</div>;
});


// App rendered
// NormalChild rendered
// MemoChild rendered  ← first time only

// // After clicking increment
// App rendered
// NormalChild rendered  ← renders again
// // MemoChild did NOT render again ✔️
