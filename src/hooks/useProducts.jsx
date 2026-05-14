import { useCallback, useEffect, useMemo, useState } from 'react'
import db from '../../db.json'

const STORAGE_KEY = 'product-showcase-products'
const initialProducts = db['food-producst'] ?? []

export default function useProducts() {
  const [products, setProducts] = useState(() => {
    const persisted = window.localStorage.getItem(STORAGE_KEY)
    return persisted ? JSON.parse(persisted) : initialProducts
  })
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  }, [products])

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return products

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.dsc.toLowerCase().includes(query) ||
        product.country.toLowerCase().includes(query)
      )
    })
  }, [products, searchTerm])

  const updatePrice = useCallback((id, price) => {
    const value = Number(price)
    if (!id || Number.isNaN(value) || value <= 0) return

    setProducts((current) =>
      current.map((product) =>
        product.id === id ? { ...product, price: value } : product,
      ),
    )
  }, [])

  const deleteProduct = useCallback((id) => {
    if (!id) return
    setProducts((current) => current.filter((product) => product.id !== id))
  }, [])

  const addProduct = useCallback((product) => {
    if (!product?.name || !product?.price) return

    setProducts((current) => [
      ...current,
      {
        ...product,
        id: `${Date.now()}`,
        price: Number(product.price),
        rate: product.rate ?? 4,
      },
    ])
  }, [])

  return {
    products,
    searchTerm,
    setSearchTerm,
    filteredProducts,
    updatePrice,
    deleteProduct,
    addProduct,
  }
}
