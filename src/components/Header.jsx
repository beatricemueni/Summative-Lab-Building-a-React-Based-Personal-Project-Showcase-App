

import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

function Header() {
  return (
    <header className='sticky top-0 z-50 w-full flex justify-between items-center flex-wrap border-none rounded-xl shadow-lg px-6 py-3 transition-shadow hover:shadow-xl'
      style={{ background: 'linear-gradient(to right, rgba(26,13,0,0.9), rgba(60,40,0,0.85))' }}>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header