import React from 'react'
import '../css/HomeContent.css'

function HomeContent() {
  return (
    <>
    <div className=' md:w-3/4 w-full h-full px-4 flex flex-col font-styling'style={{"padding":"16px,32px;"}}>
        
        <h1 className=''>Fresh Food,
           <span className='  '> Delivered Fast.</span>
           </h1> 
          <h3>
            From farm-fresh produce to ready meals — get it all delivered to your door in 30 minutes.
          </h3>
    </div>
    </>
  )
}

export default HomeContent
