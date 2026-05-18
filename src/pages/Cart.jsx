
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'
import { Trash2, Plus, Minus } from 'lucide-react'
import '../css/Cart.css'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  const subtotal = getTotalPrice()
  const shipping = 500
  const tax = Math.round(subtotal * 0.16)
  const total = subtotal + shipping + tax

  return (
    <main className="cart-page">
      <Header />

      <section className="cart-section">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <p className="cart-subtitle">Review your items before checkout</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-content">
              <h2>Your cart is empty</h2>
              <p>Start shopping to add items to your cart!</p>
              <button
                onClick={() => navigate('/products')}
                className="btn-continue-shopping"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-container">
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-origin">From: {item.country}</p>
                    <p className="item-price">Ksh {item.price.toFixed(2)}</p>
                  </div>

                  <div className="item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="qty-input"
                      min="1"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="item-total">
                    Ksh {(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn-remove"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
            <div className='sumbua'>

            {/* Order Summary */}
            <div className="order-summary">
              <h2 className="summary-title">Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>Ksh {subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>Ksh {shipping.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Tax (16%)</span>
                <span>Ksh {tax.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total</span>
                <span>Ksh {total.toFixed(2)}</span>
              </div>
              </div>

              <div className="summary-actions">
                <button
                  onClick={() => navigate('/products')}
                  className="btn-action continue"
                >
                  Continue Shopping
                </button>
                <button className="btn-action checkout">
                  Proceed to Checkout
                </button>
              </div>

              <button onClick={clearCart} className="btn-clear-cart">
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default Cart