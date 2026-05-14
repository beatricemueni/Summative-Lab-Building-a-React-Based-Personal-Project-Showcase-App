import React from 'react'
import Home from './pages /Home'
import About from './pages /About'
import Login from './pages /Login'
import Products from './pages/Products'


import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home/>}></Route>
      <Route path = "/about" element ={<About/>}></Route>
      <Route path = "/login" element ={<Login/>}></Route>
      <Route path = "/addprodcut" element ={<AddProduct/>}></Route>
      <Route path = "/products" element ={<Products/>}></Route>

    </Routes>
    </BrowserRouter>

  )
}

export default App

