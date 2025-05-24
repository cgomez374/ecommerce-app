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
import Footer from './components/Footer.jsx'

function App() {
  const [products, setProducts] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getData = async () =>  {
      const productData = await getProducts()
      setProducts(productData)
      setCategories([...new Set(productData.map(product => product.category))])
    }
    getData()
    }, [])

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <Home 
              products={products} 
              categories={categories}
            
            />
            } 
          />
          <Route path='/products' 
            element={
              <Products 
                products={products} 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}  
                categories={categories}                          
              />
            } 
          />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </CartProvider>
  )
}

export default App
