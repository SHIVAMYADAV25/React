import { useState } from 'react'
import './App.css'

function App() {
    const [bulb,setBulb] = useState(true);
  return (
   <>
    <Light bulb={bulb} setBulb={setBulb}/>
   </>
  )
}

function Light(){
  return (
    <div className='wrapper'>
    <LightBulb bulb={bulb}/>
    <BulbControl setBulb={setBulb} bulb={bulb}/>
  </div>
  )
}

function LightBulb({bulb}){
  const imgSrc = bulb ? "https://imgs.search.brave.com/uG49xBgKUnvoMni_4FKim4uc1wLFT12Jv1EAG2AQRg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Z3JhZGllbnQtbGln/aHQtYnVsYi13aXRo/LWVsZWN0cmljaXR5/XzIzLTIxNDkxNDMx/OTcuanBnP3NlbXQ9/YWlzX2luY29taW5n/Jnc9NzQwJnE9ODA" : "https://imgs.search.brave.com/9TiTxQluz67rQ5Kjqok6W0LuJpCAH1vR6g2Cjf7YryE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDEv/Nzk0LzEyOC9zbWFs/bC9jbGFzc2ljLWxp/Z2h0LWJ1bGItdHVy/bmluZy1vbi1hbmQt/b2ZmLXdpdGgtd2Vh/ay1saWdodC1hbmQt/dmVydGljYWwtZmls/YW1lbnQtaW4tNGst/ZnJlZS12aWRlby5q/cGc";

  return <img className="bulb" src={imgSrc} alt="bulb" />;
}

function BulbControl({setBulb,bulb} ){
  function changebulb(){
    // setBulb(currentNode => !currentNode);
    setBulb(!bulb);
  }
  return(
    <button onClick={changebulb}>Toggle</button>
  )
}

export default App
