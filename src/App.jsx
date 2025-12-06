import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav/Nav"
import Home from './Components/Home/Home'

import Product from './Components/Product/Product'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact'






function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />



        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
