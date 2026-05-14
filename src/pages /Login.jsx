import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "user") {
      alert("User Login successful!");
      navigate("/Home"); 
    } else {
      alert("Admin Login successful!");
      navigate("/add-product"); 
    }
  };

  return (
    <div className="page">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">FoodHub</h1>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
          <a href="/login">Login</a>
        </div>

        <button className="top-login-btn">
          Login
        </button>
      </nav>

      {/* LOGIN SECTION */}
      <div className="login-wrapper">
        <div className="login-container">

          <h1>Welcome to the Login Page</h1>
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

            <div>
              <label>Role:</label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button type="submit">
              Login
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}

export default Login;