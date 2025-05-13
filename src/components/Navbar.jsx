import { Link } from "react-router-dom"

export default function Navbar(){
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/cart">Cart</Link>
    </nav>
  )
}