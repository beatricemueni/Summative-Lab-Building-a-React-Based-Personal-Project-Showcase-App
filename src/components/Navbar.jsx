import React from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav
        className="w-3/4 flex justify-end "
        style={{ "margin-right": "30px;" }}
      >
        <ul className=" hidden justify-around md:flex w-full ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/addprodcut">Add Product</NavLink>
          <NavLink to="/products">Products</NavLink>
        </ul>
        <div className="md:hidden ">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col basis-full items-center gap-5 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/addprodcut">Add Product</NavLink>
          <NavLink to="/products">Products</NavLink>

        </ul>
      )}
    </>
  );
}

export default Navbar;
