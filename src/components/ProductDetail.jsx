import { useLocation, useParams, useNavigate } from "react-router-dom"
import { useCart } from "../utils/CartContext"
import { useEffect } from "react"

export default function ProductDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if(!location.state) {
      navigate('*')
    }
  }, [location.state, navigate])

  if(!location.state) return null

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