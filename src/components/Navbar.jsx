
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { X, Menu, LogOut, ShoppingCart } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import '../css/navbar.css'

function Navbar() {
  const [isOpen, setisOpen] = useState(false)
  const { isAuthenticated, isAdmin, logout } = useAuth()
  const { getTotalItems } = useCart()
  const navigate = useNavigate()
  const cartCount = getTotalItems()

  const toggleNavbar = () => {
    setisOpen(!isOpen)
  }

  const handleSignOut = () => {
    logout()
    navigate('/')
    setisOpen(false)
  }

  const closeMenu = () => {
    setisOpen(false)
  }

  return (
    <>
      <nav className="nav-container" style={{ marginRight: '30px' }}>
       
        <ul className="nav-desktop">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>

        
          {isAuthenticated && isAdmin && (
            <NavLink to="/addproduct" className="nav-link">Add Product</NavLink>
          )}

       
          {isAuthenticated && (
            <NavLink to="/cart" className="nav-link cart-link">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </NavLink>
          )}

        
          {isAuthenticated ? (
            <button onClick={handleSignOut} className="sign-out-btn">
              <LogOut size={18} />
              Sign Out
            </button>
          ) : (
            <NavLink to="/login" className="nav-link">Login</NavLink>
          )}
        </ul>

     
        <div className="md-hidden">
          <button onClick={toggleNavbar} className="menu-toggle">
            {isOpen ? <X size={24} color="#c85a2f" /> : <Menu size={24} color="#c85a2f" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="nav-mobile">
          <NavLink to="/" className="nav-link-mobile" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link-mobile" onClick={closeMenu}>About</NavLink>
          <NavLink to="/products" className="nav-link-mobile" onClick={closeMenu}>Products</NavLink>

          {isAuthenticated && isAdmin && (
            <NavLink to="/addproduct" className="nav-link-mobile" onClick={closeMenu}>Add Product</NavLink>
          )}

          {isAuthenticated && (
            <NavLink to="/cart" className="nav-link-mobile cart-link-mobile" onClick={closeMenu}>
              <ShoppingCart size={18} />
              Cart
              {cartCount > 0 && <span className="cart-badge-mobile">{cartCount}</span>}
            </NavLink>
          )}

          {isAuthenticated ? (
            <button onClick={handleSignOut} className="sign-out-btn-mobile">
              <LogOut size={18} />
              Sign Out
            </button>
          ) : (
            <NavLink to="/login" className="nav-link-mobile" onClick={closeMenu}>Login</NavLink>
          )}
        </ul>
      )}
    </>
  )
}

export default Navbar