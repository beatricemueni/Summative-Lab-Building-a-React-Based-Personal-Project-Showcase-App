import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/HomeContent.css'

function HomeContent() {
  const navigate = useNavigate()

  return (
    <main className="home-container">
      {/* Overlay blur effect */}
      <div className="overlay"></div>

      <div className="content md:w-3/4 w-full h-full px-4 flex flex-col font-styling relative z-10">
        <h1 className="home-title">
          Fresh Food,<span className="highlight"> Delivered Fast.</span>
        </h1>
        <h3 className="home-subtitle">
          From farm-fresh produce to ready meals — get it all delivered to your door in 30 minutes.
        </h3>

        {/* Action buttons */}
        <div className="home-buttons">
          <button 
            className="home-btn" 
            onClick={() => navigate('/products')}
          >
            Products
          </button>
          <button 
            className="home-btn" 
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>

        {/* Hero image to enrich layout */}
        <div className="hero-image">
          <img 
            src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Food delivery" 
          />
        </div>
      </div>
    </main>
  )
}

export default HomeContent
