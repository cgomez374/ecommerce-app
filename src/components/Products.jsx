import { Link } from "react-router-dom"
import { useCart } from "../utils/CartContext.jsx"

export default function Products({ products }){
  const { addToCart } = useCart()
  return (
    <section className="products-section">
      <h1>Products</h1>
      <ul className="product-list">
        {
          products.map(product => {
            const { id, image, price, title } = product
            return (
              <li key={id}>
                <Link 
                  to={`${id}`} 
                  state={{ product: product }}
                >
                  <img src={image} alt={title} width='50px' />
                  <p>{ title }</p>
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