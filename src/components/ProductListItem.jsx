import { Link } from "react-router-dom"

export default function ProductListItem({product}){
  const { id, image, price, title } = product
  return (
    <li key={id}>
      <Link 
        to={`${id}`} 
        state={{ product: product }}
      >
        <img src={image} alt={title} width='50px' />
        <p>{ title }</p>
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