import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from "./components/Input"
import './App.css'

function App() {
  const [email , setEmail] = useState("");
  const [error,setError] = useState("");

  function validdateEmail(val){
    setEmail(val);
    if(!val.includes("@")){
      setError("invalid Email : must conatin @");
    }else{
      setError("");
    }
  }

  return (
    <div style={{padding:20}}
    >
      <h1>input component Demo</h1>

      <Input
        label="Email Address"
        size="medium"
        fullWidth={true}
        error={error}
        onChange={validdateEmail}
      />

      <p>you typed : {email}</p>
    </div>
  )
}

export default App
