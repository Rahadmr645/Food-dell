import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import { Routes,Route } from 'react-router-dom'
import Carts from './carts/Carts'


function App() {
 
  return (
    <>
      <Navbar/>
     
     

      {/* Router section */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/carts' element={<Carts/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
