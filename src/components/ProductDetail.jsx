import { useLocation, useParams } from "react-router-dom"
import { useCart } from "../utils/CartContext"

export default function ProductDetail(){
  const { id } = useParams()
  const { product } = useLocation().state
  const { title, price, image } = product
  const { addToCart } = useCart()

  return (
    <div className="product">
      <h1>{ title }</h1>
      <h3>${ price }</h3>
      <img src={image} alt={title} width='150px' />
      <button 
        className="cart-btn"
        onClick={() => addToCart(product)}
      >
        add to cart
      </button>
    </div>
  )
}