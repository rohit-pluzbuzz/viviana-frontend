// src/ProductContext.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

const ProductContext = createContext()
export const useProducts = () => useContext(ProductContext)

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const API_BASE = (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim()) || "http://localhost:5000";
  const loadProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/products`);
      const data = await res.json();

      setProducts(data); // assuming backend returns an array
      setLoading(false);
    } catch (err) {
      console.error('Failed to load products:', err);
    }
  };

  loadProducts();
}, []);


  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct])
  }

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct, loading }}>
      {children}
    </ProductContext.Provider>
  )
}
