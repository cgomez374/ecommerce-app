import { Link } from "react-router-dom"

export default function Products({ products }){
    return (
    <section className="products-section">
      <h1>Products Component</h1>
      <ul className="product-list">
        {
          products.map(product => {
            const { id, image, price, title } = product
            return (
              <li key={id}>
                <Link 
                  to={`${id}`} 
                  state={{ product: product }}
                >
                  <img src={image} alt={title} width='50px' />
                  <p>{ title }</p>
                </Link>
              </li>
            )})
        }
      </ul>
    </section>
  )
}