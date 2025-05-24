import { Link, useLocation } from "react-router-dom"
import { useCart } from "../utils/CartContext"

export default function ProductListItem({product}){
  const { addToCart } = useCart()
  const location = useLocation()
  const { id, image, price, title } = product
  return (
    <li key={id}>
      <Link 
        to={location.pathname !== '/products' ? `/products/${id}`: `${id}`} 
        state={{ product: product }}
      >
        <img src={image} alt={title} width='50px' />
        <p className="product-name">{ title }</p>
        <p className="price">${ price.toFixed(2) }</p>
      </Link>
      <button 
        className="cart-btn"
        onClick={() => addToCart(product)}
      >
        add to cart
      </button>
    </li>
  )
}