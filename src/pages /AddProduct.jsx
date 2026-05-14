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
  )
}

export default AddProduct
