import React from 'react';
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetail'
import Footer from './components/Footer'
import orderConfirmation from './pages/orderConfirmation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Router>
      <div className='min-h-screen bg-gray-950 font-sans'>
<Navbar />

      
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/order-confirmation' element={<orderConfirmation />} />
      </Routes>
      <Footer />
      </div>
      
    </Router>
    </>
  )
}

export default App
App