import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo' 
function Header() {
  return (
   <>
   <header className=' sticky top-8 z-20 w-full  md:w-3/4 flex justify-between items-center flex-wrap  border rounded-lg border-none shadow-md hover:shadow-xl transition-shadow' style={{'background':'linear-gradient(rgba(26,13,0,0.7))'}}>
    <Logo/>
    <Navbar/>
   </header>

   </>
  )
}

export default Header
