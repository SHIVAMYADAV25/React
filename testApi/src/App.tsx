import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct'
import Product from './pages/Product'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<ListProduct/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App
