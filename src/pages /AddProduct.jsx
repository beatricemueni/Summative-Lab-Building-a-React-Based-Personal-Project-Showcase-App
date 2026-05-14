import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { useState } from 'react'
import '../css/Form.css';

function AddProduct() {
const navigate = useNavigate()
const [addItem, setAddItem] = useState({
    name: "",
    dsc: "",
    price: "",
    rate: "",
    country: "",
    img: "",
})

 function handleChange(e) {
  setAddItem(prev => ({ ...prev, [e.target.name]: e.target.value }))
}

async function handleAddItem (e){
 e.preventDefault()
 try{
  const response = await fetch ("http://localhost:3001/food-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: addItem.name,
          dsc: addItem.dsc,
          price: Number(addItem.price),
          rate: Number(addItem.rate),
          country: addItem.country,
          img: addItem.img,
        }),
      })
      if (!response.ok)
        throw new Error ("Unable to add new item to the list")
      const data = await response.json()
      setAddItem(prev =>({...prev, ...data}))
      navigate("/products")
 } catch (error){
  console.error(error.message)
 }
}


  return (
    <>
   <header className="nav-header">
  <div className="nav-container">
    <div className="header-logo">FoodHub</div>
    <nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/products" className="nav-link">Products</Link>
    </nav>
  </div>
</header>
     <div className="container">
      <h2 >Add New Product</h2>
      <p >Fill in the details below to add a new product to our catalog</p>

      <form onSubmit={handleAddItem} className="add-product-form">
        
        <div className="form-group">
          <label className="form-label">Product name</label>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            value={addItem.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            name="dsc"
            placeholder="Description"
            value={addItem.dsc}
            onChange={handleChange}
            rows={3}
            className="form-textarea"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Price (Kshs)</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={addItem.price}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Rating</label>
          <input
            type="number"
            name="rate"
            placeholder="Rating (1-5)"
            value={addItem.rate}
            onChange={handleChange}
            className="form-input"
            min="1"
            max="5"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Origin</label>
          <input
            type="text"
            name="country"
            placeholder="Country of origin"
            value={addItem.country}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Image Link</label>
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={addItem.img}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="form-button">
          Add Product
        </button>

      </form>
    </div>
    </>
  )
}

export default AddProduct