import { Link } from "react-router-dom"

export default function Products(){
  const products = [
    {
      id: 1,
      name: 'samsung s25',
      price: 1000
    },
    {
      id: 2,
      name: 'iphone 16',
      price: 1000
    },
    {
      id: 3,
      name: 'google pixel something',
      price: 1000
    }
  ]
  return (
    <section>
      <h1>Products Component</h1>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <Link 
                to={`${product.id}`} 
                state={{ name: product.name, price: product.price }}>
                {product.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}