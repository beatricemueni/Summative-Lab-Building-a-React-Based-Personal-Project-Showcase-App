
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import useProducts from '../hooks/useProducts'

function AddProduct() {
  const { addProduct } = useProducts()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    dsc: '',
    img: '',
    country: '',
    price: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.price.trim()) return

    addProduct(form)
    navigate('/products')
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">Add New Product</h1>
          <p className="mt-2 text-slate-600">Create a product entry for the showcase catalog.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Price</span>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                min="1"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Description</span>
            <textarea
              name="dsc"
              value={form.dsc}
              onChange={handleChange}
              rows="4"
              className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Country / Location</span>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Image URL</span>
              <input
                name="img"
                value={form.img}
                onChange={handleChange}
                placeholder="https://..."
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Add product
          </button>
        </form>
      </section>
    </main>

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