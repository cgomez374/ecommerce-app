import ProductListItem from "./ProductListItem"

export default function Home({ products }){
    return (
      <div className="homepage-container">
        <div className="hero">
          <h1>welcome to FakeStore</h1>
          <p>big ass sale on all your favorite shit!</p>
        </div>
        <div className="">
          <h3>featured products section</h3>
          <ul className="product-list">
            {
              products.slice(0, 5).map(product => (
                <ProductListItem key={product.id} product={product} />
              ))
            }
          </ul>
        </div>
        <h3>product categories section</h3>
        <h3>promotional banner section</h3>
        <h3>footer section</h3>
      </div>
  )
};