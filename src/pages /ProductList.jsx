import { useState } from 'react'
import Navbar from '../components/Navbar'
import useProducts from '../hooks/useProducts'

function ProductList() {
  const { filteredProducts, searchTerm, setSearchTerm, updatePrice, deleteProduct } = useProducts()
  const [priceEdits, setPriceEdits] = useState({})

  const handlePriceChange = (id, value) => {
    setPriceEdits((current) => ({ ...current, [id]: value }))
  }

  const handleSavePrice = (id) => {
    const newPrice = priceEdits[id]
    if (!newPrice) return
    updatePrice(id, newPrice)
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Product Showcase</h1>
            <p className="mt-1 text-sm text-slate-600">Search and manage products from the showcase catalog.</p>
          </div>

          <div className="w-full max-w-sm">
            <label className="mb-2 block text-sm font-medium text-slate-700">Search products</label>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, description, or location"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/90 p-10 text-center text-slate-600">
            No products match your search. Try another keyword.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={product.img} alt={product.name} className="h-52 w-full object-cover" />
                <div className="space-y-4 p-5">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
                    <p className="text-sm text-slate-500">{product.dsc}</p>
                  </div>

                  <div className="grid gap-2 text-sm text-slate-600">
                    <div>Location: {product.country}</div>
                    <div>Rating: {product.rate} / 5</div>
                    <div className="text-lg font-semibold text-slate-900">${product.price}</div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Update price</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="1"
                        value={priceEdits[product.id] ?? product.price}
                        onChange={(event) => handlePriceChange(product.id, event.target.value)}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                      />
                      <button
                        type="button"
                        onClick={() => handleSavePrice(product.id)}
                        className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteProduct(product.id)}
                    className="w-full rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
                  >
                    Delete product
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default ProductList
