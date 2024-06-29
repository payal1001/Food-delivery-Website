import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Placeorder from './pages/Placeorder/Placeorder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
const App = () => {
  
  const [showlogin,setshowlogin]=useState(false);

  return (
    <>
      {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
      <div className='app'>
        <Navbar setshowlogin={setshowlogin}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
