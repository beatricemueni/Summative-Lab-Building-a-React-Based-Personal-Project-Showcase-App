About.jsx

import React from 'react';
import '../css/About.css';

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Food Hub</h1>
          <p className="about-hero-subtitle">
            Crafting Culinary Excellence Since 2026
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-story">
            <h2 className="about-section-title">Food Hub's Story</h2>
            <div className="about-story-content">
              <div className="about-story-text">
                <p className="about-text">
                  Welcome to Food Hub, where passion for food meets exceptional hospitality. 
                  Founded in 2026, our restaurant has been a beloved destination for food enthusiasts 
                  seeking authentic flavors and memorable dining experiences.
                </p>
                <p className="about-text">
                  Food Hub's journey began with a simple vision: to create a space where quality ingredients, 
                  skilled culinary techniques, and warm hospitality come together to delight every guest. 
                  What started as a small neighborhood eatery has grown into a renowned establishment 
                  recognized for our commitment to excellence.
                </p>
                <p className="about-text">
                  Food Hub's commitment to excellence is reflected in every dish we serve. 
                  We believe that great food is more than just nourishment—it's an experience that brings 
                  people together and creates lasting memories.
                </p>
              </div>
              <div className="about-story-image">
                <div className="about-image-placeholder">🍽️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-section about-mission-section">
        <div className="about-wrapper">
          <h2 className="about-section-title">Food Hub's Mission & Values</h2>
          
          <div className="about-mission-grid">
            <div className="about-mission-card">
              <div className="about-mission-icon">🎯</div>
              <h3 className="about-mission-title">Our Mission</h3>
              <p className="about-mission-text">
                To deliver exceptional culinary experiences that celebrate quality, creativity, 
                and authenticity while providing warm, attentive service to every guest.
              </p>
            </div>

            <div className="about-mission-card">
              <div className="about-mission-icon">⭐</div>
              <h3 className="about-mission-title">Quality First</h3>
              <p className="about-mission-text">
                We source only the finest ingredients from trusted suppliers. Every component 
                of our dishes is carefully selected for freshness, flavor, and sustainability.
              </p>
            </div>

            <div className="about-mission-card">
              <div className="about-mission-icon">👨‍🍳</div>
              <h3 className="about-mission-title">Culinary Excellence</h3>
              <p className="about-mission-text">
                Our chefs bring years of experience and passion to every plate. We continuously 
                innovate while honoring traditional cooking techniques and flavors.
              </p>
            </div>

            <div className="about-mission-card">
              <div className="about-mission-icon">❤️</div>
              <h3 className="about-mission-title">Guest Satisfaction</h3>
              <p className="about-mission-text">
                Your satisfaction is our priority. We strive to create a welcoming atmosphere 
                where every guest feels valued and cared for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Menu Philosophy Section */}
      <section className="about-section">
        <div className="about-wrapper">
          <h2 className="about-section-title">Our Menu Philosophy</h2>
          
          <div className="about-menu-philosophy">
            <div className="about-philosophy-item">
              <div className="about-philosophy-icon">🌱</div>
              <h3 className="about-philosophy-title">Farm-to-Table</h3>
              <p className="about-philosophy-text">
                We partner with local farmers and suppliers to bring the freshest seasonal ingredients 
                to your table. Supporting local communities is at the heart of our sourcing strategy.
              </p>
            </div>

            <div className="about-philosophy-item">
              <div className="about-philosophy-icon">🔥</div>
              <h3 className="about-philosophy-title">Authentic Recipes</h3>
              <p className="about-philosophy-text">
                Our menu features authentic recipes passed down through generations, combined with 
                modern culinary techniques to create unique and memorable dishes.
              </p>
            </div>

            <div className="about-philosophy-item">
              <div className="about-philosophy-icon">🎨</div>
              <h3 className="about-philosophy-title">Artistic Presentation</h3>
              <p className="about-philosophy-text">
                We believe that dining is a multisensory experience. Each dish is carefully plated 
                to delight not just your palate, but your eyes as well.
              </p>
            </div>

            <div className="about-philosophy-item">
              <div className="about-philosophy-icon">🍷</div>
              <h3 className="about-philosophy-title">Perfect Pairings</h3>
              <p className="about-philosophy-text">
                Our sommelier team carefully curates wine and beverage selections that complement 
                our dishes and enhance your dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="about-section about-team-section">
        <div className="about-wrapper">
          <h2 className="about-section-title">Meet Our Team</h2>
          
          <div className="about-team-grid">
            <div className="about-team-card">
              <div className="about-team-image">👨‍🍳</div>
              <h3 className="about-team-name">Chef Adams </h3>
              <p className="about-team-role">Executive Chef</p>
              <p className="about-team-bio">
                With 20+ years of culinary experience across Europe, Chef Adams brings innovation 
                and tradition to every dish, earning our restaurant recognition for excellence.
              </p>
            </div>

            <div className="about-team-card">
              <div className="about-team-image">👨‍🍳</div>
              <h3 className="about-team-name">Chef William</h3>
              <p className="about-team-role">Head Pastry Chef</p>
              <p className="about-team-bio">
                William specializes in artisanal desserts and has won multiple international pastry 
                competitions. His creations are the perfect ending to any meal.
              </p>
            </div>

            <div className="about-team-card">
              <div className="about-team-image">🍷</div>
              <h3 className="about-team-name">Kipng'eno</h3>
              <p className="about-team-role">Sommelier</p>
              <p className="about-team-bio">
                Expert wine pairing specialist with extensive knowledge of global wine regions. 
                Kipng'eno ensures every wine selection perfectly complements your meal.
              </p>
            </div>

            <div className="about-team-card">
              <div className="about-team-image">👩‍💼</div>
              <h3 className="about-team-name">Beatrice</h3>
              <p className="about-team-role">Restaurant Manager</p>
              <p className="about-team-bio">
                Beatrice ensures every guest experiences exceptional service and hospitality. 
                Her attention to detail makes every visit special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="about-section">
        <div className="about-wrapper">
          <h2 className="about-section-title">Awards & Recognition</h2>
          
          <div className="about-awards-grid">
            <div className="about-award-card">
              <div className="about-award-icon">🏆</div>
              <h3 className="about-award-title">The Hell's Kitchen Winner's Prize</h3>
              <p className="about-award-text">2022 - 2024</p>
            </div>

            <div className="about-award-card">
              <div className="about-award-icon">⭐</div>
              <h3 className="about-award-title">Best Restaurant</h3>
              <p className="about-award-text">City Dining Awards 2023</p>
            </div>

            <div className="about-award-card">
              <div className="about-award-icon">👨‍🍳</div>
              <h3 className="about-award-title">Chef Excellence</h3>
              <p className="about-award-text">International Culinary Awards 2022</p>
            </div>

            <div className="about-award-card">
              <div className="about-award-icon">💚</div>
              <h3 className="about-award-title">Sustainable Sourcing</h3>
              <p className="about-award-text">Green Restaurant Association</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section about-why-us-section">
        <div className="about-wrapper">
          <h2 className="about-section-title">Why Choose Us</h2>
          
          <div className="about-why-us-grid">
            <div className="about-why-us-item">
              <div className="about-why-us-number">1</div>
              <h3 className="about-why-us-title">Premium Ingredients</h3>
              <p className="about-why-us-text">
                We use only the finest, freshest ingredients sourced from trusted local and 
                international suppliers.
              </p>
            </div>

            <div className="about-why-us-item">
              <div className="about-why-us-number">2</div>
              <h3 className="about-why-us-title">Expert Chefs</h3>
              <p className="about-why-us-text">
                Our culinary team brings decades of combined experience and passion to every 
                dish they create.
              </p>
            </div>

            <div className="about-why-us-item">
              <div className="about-why-us-number">3</div>
              <h3 className="about-why-us-title">Exceptional Service</h3>
              <p className="about-why-us-text">
                Our staff is trained to provide attentive, personalized service that exceeds 
                expectations.
              </p>
            </div>

            <div className="about-why-us-item">
              <div className="about-why-us-number">4</div>
              <h3 className="about-why-us-title">Ambiance & Comfort</h3>
              <p className="about-why-us-text">
                Our thoughtfully designed dining space creates the perfect atmosphere for any 
                occasion.
              </p>
            </div>

            <div className="about-why-us-item">
              <div className="about-why-us-number">5</div>
              <h3 className="about-why-us-title">Sustainability</h3>
              <p className="about-why-us-text">
                We're committed to eco-friendly practices and supporting local communities through 
                ethical sourcing.
              </p>
            </div>

            <div className="about-why-us-item">
              <div className="about-why-us-number">6</div>
              <h3 className="about-why-us-title">Memorable Experiences</h3>
              <p className="about-why-us-text">
                Every visit to our restaurant is designed to create lasting memories and moments 
                to cherish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="about-section about-stats-section">
        <div className="about-wrapper">
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-number">14+</div>
              <p className="about-stat-label">Years of Excellence</p>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-number">50K+</div>
              <p className="about-stat-label">Happy Guests</p>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-number">100+</div>
              <p className="about-stat-label">Menu Dishes</p>
            </div>

            <div className="about-stat-card">
              <div className="about-stat-number">4.9★</div>
              <p className="about-stat-label">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-section about-cta-section">
        <div className="about-wrapper">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Experience Our Culinary Excellence</h2>
            <p className="about-cta-text">
              Join us for an unforgettable dining experience. Reserve your table today and discover 
              why we're the city's most beloved restaurant.
            </p>
            <button className="about-cta-button">Reserve a Table</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

     
  
