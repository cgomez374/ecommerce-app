import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CartProvider } from './utils/CartContext.jsx'
import getProducts from './utils/getProducts.js'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

function App() {
  const [products, setProducts] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const getData = async () => setProducts(await getProducts())
    getData()
    }, [])

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' 
            element={
              <Products 
                products={products} 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}                            
              />
            } 
          />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/products/*' element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
