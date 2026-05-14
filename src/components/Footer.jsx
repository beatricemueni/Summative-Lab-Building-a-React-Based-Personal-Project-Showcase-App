import React from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Mail, Share2, Camera, Users } from 'lucide-react'

function Footer() {
  return (
    <footer
      className='w-full mt-10 px-8 py-10 shadow-lg text-white'
      style={{ background: 'linear-gradient(to right, rgba(26,13,0,0.95), rgba(60,40,0,0.95))' }}
    >
      <div className='flex flex-col md:flex-row justify-between items-start gap-8'>

        {/* Logo & Description */}
        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold tracking-wide text-yellow-400'>BiteCart</h2>
          <p className='text-sm text-white max-w-xs leading-relaxed'>
            Delivering culinary excellence since 2026.
            Fresh ingredients, authentic recipes, unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-yellow-400 font-semibold mb-2 text-base'>Quick Links</h3>
          <NavLink to="/" className='text-white text-sm py-1 hover:text-yellow-400 hover:translate-x-1 transition-all duration-200'>Home</NavLink>
          <NavLink to="/about" className='text-white text-sm py-1 hover:text-yellow-400 hover:translate-x-1 transition-all duration-200'>About</NavLink>
          <NavLink to="/products" className='text-white text-sm py-1 hover:text-yellow-400 hover:translate-x-1 transition-all duration-200'>Products</NavLink>
          <NavLink to="/addproduct" className='text-white text-sm py-1 hover:text-yellow-400 hover:translate-x-1 transition-all duration-200'>Add Product</NavLink>
          <NavLink to="/login" className='text-white text-sm py-1 hover:text-yellow-400 hover:translate-x-1 transition-all duration-200'>Login</NavLink>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-3'>
          <h3 className='text-yellow-400 font-semibold mb-2 text-base'>Contact Us</h3>
          <p className='text-white text-sm flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200 cursor-pointer'>
            <MapPin size={16} className='text-yellow-400 shrink-0' /> Nairobi, Kenya
          </p>
          <p className='text-white text-sm flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200 cursor-pointer'>
            <Phone size={16} className='text-yellow-400 shrink-0' /> +254 700 000 000
          </p>
          <p className='text-white text-sm flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200 cursor-pointer'>
            <Mail size={16} className='text-yellow-400 shrink-0' /> info@bitecart.com
          </p>
        </div>

        {/* Social */}
        <div className='flex flex-col gap-3'>
          <h3 className='text-yellow-400 font-semibold mb-2 text-base'>Follow Us</h3>
          <p className='text-white text-sm flex items-center gap-2 hover:text-yellow-400 hover:scale-105 transition-all duration-200 cursor-pointer'>
            <Share2 size={16} className='text-yellow-400 shrink-0' /> Twitter
          </p>
          <p className='text-white text-sm flex items-center gap-2 hover:text-yellow-400 hover:scale-105 transition-all duration-200 cursor-pointer'>
            <Camera size={16} className='text-yellow-400 shrink-0' /> Instagram
          </p>
          <p className='text-white text-sm flex items-center gap-2 hover:text-yellow-400 hover:scale-105 transition-all duration-200 cursor-pointer'>
            <Users size={16} className='text-yellow-400 shrink-0' /> Facebook
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='mt-8 pt-4 border-t border-yellow-700 text-center text-white text-xs'>
        © {new Date().getFullYear()} BiteCart. All rights reserved. Made with ❤️ in Nairobi
      </div>

    </footer>
  )
}

export default Footer