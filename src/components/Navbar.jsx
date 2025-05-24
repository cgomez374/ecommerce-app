import { Link } from "react-router-dom"
import { useCart } from "../utils/CartContext"

export default function Navbar(){
  const { cartItems } = useCart()
  const cartCount = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
  return (
    <nav>
      <Link className="logo" to="/">FakeStore</Link>
      <div className="link-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="cart-link" to="/cart">
          Cart
          {
            cartCount > 0 && <span class="cart-count">{ cartCount }</span>
          }
        </Link>
      </div>
    </nav>
  )
}