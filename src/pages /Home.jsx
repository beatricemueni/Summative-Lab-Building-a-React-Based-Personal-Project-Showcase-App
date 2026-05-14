import React from 'react'
import '../css/Home.css'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'

function Home() {
  return (
    <main >
      <div className="overlay">
   <div className=' flex flex-col items-center gap-20 w-full h-full '>
          <Header/>
          <HomeContent/>
        </div>
      </div>
      
    </main>
    
  )
}

export default Home
