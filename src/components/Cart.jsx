import { Link } from "react-router-dom"
import { useCart } from "../utils/CartContext.jsx"

export default function Cart(){
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart()
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {
        cartItems.length > 0 
          ? <button className="cart-btn" onClick={clearCart}>clear cart</button> 
          : <h3>Cart is empty!</h3>
      }
      {
        cartItems.length > 0 && 
          <ul className="cart-list">
            {
              cartItems.map(product => {
                  const { id, image, price, title, quantity } = product
                  return (
                    <li key={id}>
                      <img src={image} alt={title}/>
                      <div className="">
                        <Link
                          to={`/products/${id}`} 
                          state={{ product: product }}
                        >
                          <h4>{ title }</h4>
                        </Link>
                        <p>price: ${ price }</p>
                        <div className="cart-quantity-btn-container">
                          {/* <p>quantity: </p> */}
                          <button onClick={() => removeFromCart(id)}>-</button>
                          <p>{ quantity }</p>
                          <button onClick={() => addToCart(product)}>+</button>
                        </div>
                      </div>
                    </li>
                  )
                })
            }
          </ul>
      }
    
    </div>
  )
}