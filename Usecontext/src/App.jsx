import './App.css'
import {createContext , useContext, useState} from "react";

//first create context
const BublContext = createContext();

function App() {
  const [bulbOn , setBulbOn ] = useState(true);

  return (
    <BublContext.Provider value={{
      bulbOn : bulbOn,
      setBulbOn : setBulbOn
    }}
    >
      <Light/>
    </BublContext.Provider >
  )
}

function Light(){
  return (
    <div className='wrapper'>
    <LightIMG/>
    <ControlIMG/>
    </div>
  )
}

function LightIMG(){
  // useContext is an object in which we are destructring it
  const { bulbOn } = useContext(BublContext);

  let imgSrc = bulbOn ? "https://imgs.search.brave.com/uG49xBgKUnvoMni_4FKim4uc1wLFT12Jv1EAG2AQRg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Z3JhZGllbnQtbGln/aHQtYnVsYi13aXRo/LWVsZWN0cmljaXR5/XzIzLTIxNDkxNDMx/OTcuanBnP3NlbXQ9/YWlzX2luY29taW5n/Jnc9NzQwJnE9ODA" : "https://imgs.search.brave.com/9TiTxQluz67rQ5Kjqok6W0LuJpCAH1vR6g2Cjf7YryE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDEv/Nzk0LzEyOC9zbWFs/bC9jbGFzc2ljLWxp/Z2h0LWJ1bGItdHVy/bmluZy1vbi1hbmQt/b2ZmLXdpdGgtd2Vh/ay1saWdodC1hbmQt/dmVydGljYWwtZmls/YW1lbnQtaW4tNGst/ZnJlZS12aWRlby5q/cGc";
  return(
      <img className="bulb" src={imgSrc} alt="bulb" />
  )

}

function ControlIMG(){
  const {bulbOn,setBulbOn} = useContext(BublContext);
  function revert(){
    setBulbOn(!bulbOn)
  }
  return(
    <button onClick={revert}>Press</button>
  )
}

export default App
