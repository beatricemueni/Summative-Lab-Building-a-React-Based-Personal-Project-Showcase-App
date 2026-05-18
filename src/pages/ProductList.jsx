
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Trash2 } from 'lucide-react'
import '../css/ProductList.css'

function ProductList() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [priceEdits, setPriceEdits] = useState({})
  const [addedMessage, setAddedMessage] = useState({})
  const { isAdmin } = useAuth()
  const { addToCart } = useCart()

  // Fetch products from backend
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:3001/food-product')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error.message)
      }
    }
    fetchProducts()
  }, [])

  // Filter products by search term
  const filteredProducts = products.filter((product) => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return true
    return (
      product.name.toLowerCase().includes(query) ||
      product.dsc.toLowerCase().includes(query) ||
      product.country.toLowerCase().includes(query)
    )
  })

  // Handle price input change
  const handlePriceChange = (id, value) => {
    setPriceEdits((current) => ({ ...current, [id]: value }))
  }

  // Save updated price to backend
  const handleSavePrice = async (id) => {
    const newPrice = priceEdits[id]
    if (!newPrice) return
    try {
      const response = await fetch(`http://localhost:3001/food-product/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price: Number(newPrice) }),
      })
      if (!response.ok) throw new Error('Failed to update price')
      const updated = await response.json()
      setProducts((current) =>
        current.map((p) => (p.id === id ? updated : p))
      )
    } catch (error) {
      console.error('Error updating price:', error.message)
    }
  }

  // Delete product from backend
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/food-product/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete product')
      setProducts((current) => current.filter((p) => p.id !== id))
    } catch (error) {
      console.error('Error deleting product:', error.message)
    }
  }

  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product, 1)
    setAddedMessage((prev) => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedMessage((prev) => ({ ...prev, [product.id]: false }))
    }, 2000)
  }

  return (
    <main className="product-page">
      <Header />
      <section className="product-section">
        {/* Header Section */}
        <div className="product-header">
          <h1 className="product-title">Product Showcase</h1>
          <p className="product-subtitle">
            Discover and manage premium products from our curated catalog
          </p>

          <div className="search-container">
            <label className="search-label">🔍 Search products</label>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, description, or location..."
              className="search-input"
            />
          </div>
        </div>

        {/* Results Count */}
        {filteredProducts.length > 0 && (
          <p className="results-count">
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? 's' : ''}
          </p>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <p className="empty-title">No products found</p>
            <p className="empty-subtitle">Try adjusting your search keywords</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                {/* Image */}
                <div className="product-image">
                  <img src={product.img} alt={product.name} />
                </div>

                {/* Content */}
                <div className="product-content">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-desc">{product.dsc}</p>

                  <div className="product-details">
                    <div className="detail-row">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{product.country}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Rating:</span>
                      <span className="detail-value">⭐ {product.rate}/5</span>
                    </div>
                  </div>

                  <div className="product-price">
                    <span className="price-label">Price</span>
                    <span className="price-value">Ksh {product.price}</span>
                  </div>

                  {/* ADD TO CART - visible for all users */}
                  <div className="add-to-cart-section">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className={`btn add-to-cart-btn ${
                        addedMessage[product.id] ? 'added' : ''
                      }`}
                    >
                      <ShoppingCart size={18} />
                      {addedMessage[product.id] ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>

                  {/* ADMIN ONLY - Update Price */}
                  {isAdmin && (
                    <div className="update-price">
                      <label className="update-label">💰 Update Price</label>
                      <div className="update-row">
                        <input
                          type="number"
                          min="1"
                          value={priceEdits[product.id] ?? product.price}
                          onChange={(event) =>
                            handlePriceChange(product.id, event.target.value)
                          }
                          className="update-input"
                        />
                        <button
                          type="button"
                          onClick={() => handleSavePrice(product.id)}
                          className="btn save-btn"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ADMIN ONLY - Delete Product */}
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() => deleteProduct(product.id)}
                      className="btn delete-btn"
                    >
                      <Trash2 size={18} />
                      Delete Product
                    </button>
                  )}
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