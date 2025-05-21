import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../utils/CartContext.jsx"
import { useEffect } from "react"

export default function Cart(){
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => cartItems.length === 0 && navigate('/products'), 800)
  }, [cartItems, navigate])

  function countTotalItems(){
    let count = 0
    cartItems.forEach(item => count += item.quantity)
    return count
  }

  function orderSubTotal(){
    let sum = 0
    cartItems.forEach(item => sum += (item.price * item.quantity))
    return sum.toFixed(2)
  }

  const tax = (orderSubTotal() * .10).toFixed(2)
  
  const grandTotal = (Number(orderSubTotal()) + Number(tax)).toFixed(2)
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {
        cartItems.length === 0 && <h3>Cart is empty!</h3>
      }
      {
        cartItems.length > 0 &&
          <div className="list-summary-container">
            <div className="order-summary">
              <h3>order summary</h3>
              <p>total items: { countTotalItems() }</p>
              <p>subtotal: ${ orderSubTotal() }</p>
              <p>tax: ${ tax }</p>
              <p>grand total: ${ grandTotal }</p>
              <div className="order-summary-btns">
                <button className="cart-btn">checkout</button>
                <button className="cart-btn" onClick={clearCart}>clear cart</button>
              </div>
            </div>
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
          </div> 
      }
    
    </div>
  )
}