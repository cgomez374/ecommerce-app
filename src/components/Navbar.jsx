import { Link } from "react-router-dom"

export default function Navbar(){
  return (
    <nav>
      <div className="link-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
      </div>
    </nav>
  )
}