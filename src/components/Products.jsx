import { Link } from "react-router-dom"
import { useCart } from "../utils/CartContext.jsx"
import { useState } from "react"

export default function Products({ products, activeFilter, setActiveFilter }){
  const { addToCart } = useCart()

  const categories = [...new Set(products.map(product => product.category))]

  const filteredProducts = products.filter(product => {
    if(activeFilter === 'all') return true
    if(activeFilter === product.category) return true
    return false
  })
  
  return (
    <section className="products-section">
      <h1>Products</h1>
      <select 
        name="categories" 
        className="categories"
        value={activeFilter}
        onChange={(e) => setActiveFilter(e.currentTarget.value)}
      >
        <option value="all">all categories</option>
        {
          categories.map((option, idx) => (
            <option 
              key={idx} 
              value={ option }
            >
              { option }
            </option>
          ))
        }
      
      </select>
      <ul className="product-list">
        {
          filteredProducts.map(product => {
            const { id, image, price, title } = product
            return (
              <li key={id}>
                <Link 
                  to={`${id}`} 
                  state={{ product: product }}
                >
                  <img src={image} alt={title} width='50px' />
                  <p>{ title }</p>
                  <p className="price">${ price.toFixed(2) }</p>
                </Link>
                <button 
                  className="cart-btn"
                  onClick={() => addToCart(product)}
                >
                  add to cart
                </button>
              </li>
            )})
        }
      </ul>
    </section>
  )
}