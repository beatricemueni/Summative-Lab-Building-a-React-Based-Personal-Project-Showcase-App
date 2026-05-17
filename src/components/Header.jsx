// import React from 'react'
// import Navbar from './Navbar'
// import Logo from './Logo' 
// function Header() {
//   return (
//    <>
//    <header className=' sticky top-8 z-20 w-full  md:w-3/4 flex justify-between items-center flex-wrap  border rounded-lg border-none shadow-md hover:shadow-xl transition-shadow' style={{'background':'linear-gradient(rgba(26,13,0,0.7))'}}>
//     <Logo/>
//     <Navbar/>
//    </header>

//    </>
//   )
// }

// export default Header


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