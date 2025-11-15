import { useState } from 'react'
import Card from "./components/Card"
import './App.css'

function App() {
  
  return (
    <div className='main'>
     <Card className="card">
      <h4>Free</h4>

      <div className="mid">
        <div>$</div>
        <h1>0</h1>
      </div>

      <div>free for your whole team</div>

      <div>for indiviual or team looking for organize anything</div>

      <button className='btn1'>Get Started</button>
    </Card>

    <Card className="card">
      <h4>Standard</h4>

      <div className="mid">
        <div>$</div>
        <h1>6</h1>
      </div>

      <div>per user per month</div>
      <div>for team that needs to manage any work </div>

      <button className='btn2'>Get Started</button>
    </Card>

    <Card className="card">
      <h4>Premium</h4>

      <div className="mid">
        <div>$</div>
        <h1>30</h1>
      </div>

      <div>per user per month </div>
      <div>best for team that needs to manage multiple project</div>

      <button className='btn3'>Get Started</button>
    </Card>


     </div>
  )
}

export default App
