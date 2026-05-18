
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Header from '../components/Header'
import '../css/Login.css'

function Login() {
  const [role, setRole] = useState('user')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(role)

    if (role === 'user') {
      alert('User Login successful!')
      navigate('/')
    } else {
      alert('Admin Login successful!')
      navigate('/addproduct')
    }
  }

  return (
    <div className="page">
      <Header />

      {/* LOGIN SECTION */}
      <div className="login-wrapper">
        <div className="login-container">
          <h1>Welcome to the Login Page</h1>
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Role:</label>

              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login