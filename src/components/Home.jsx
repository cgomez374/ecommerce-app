import { Link } from "react-router-dom"
import ProductListItem from "./ProductListItem"

export default function Home({ products, categories }){
  return (
    <div className="homepage-container">
      <div className="hero">
        <h1>Welcome to FakeStore</h1>
        <p class="hero-subtitle">Discover the latest trends in fashion, tech, and lifestyle.</p>
        <Link className='hero-btn' to="/products">Shop Now</Link>
      </div>
      <div className="featured-items">
        <h3>featured products</h3>
        <ul className="product-list">
          {
            products.slice(0, 4).map(product => (
              <ProductListItem key={product.id} product={product} />
            ))
          }
        </ul>
      </div>
      <div className="categories-container">
        <h2>categories</h2>
        <ul className="categories-list">
        {
          categories.map((category, idx) => (
            <li key={idx} className="category">
              <Link to={'/products'} state={{ category }}>{ category }</Link>
            </li>
          ))
        }
        </ul>
      </div>
      {/* Promotional Banner */}
      <div class="promo-banner">
        🎉 Limited Time Offer: Get 20% OFF on all electronics! Use code <strong>SALE20</strong> at checkout.
      </div>
    </div>
  )
};