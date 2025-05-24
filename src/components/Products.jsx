import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import ProductListItem from "./ProductListItem.jsx"

export default function Products({ products, activeFilter, setActiveFilter, categories }){
  const location = useLocation()

  useEffect(() => {
    if(location.state){
      const { category } = location.state
      setActiveFilter(category)
    }
  }, [])

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
        className="categories-select"
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
            return (
              <ProductListItem key={product.id} product={product} />
            )})
        }
      </ul>
    </section>
  )
}