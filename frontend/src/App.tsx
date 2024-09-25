
import './App.css'
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductSection from './components/ProductSection';
import {newProducts , trendingProducts} from '../dummyData/data.js'
import FeatureSection from './components/FeatureSection';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import Products from './components/Products';


function App() {
 

  return (
   
  
    <Router>
    <Header/>
    <Routes>
      <Route
        path='/'
        element={
          <>
            <HeroBanner/>
            <ProductSection
              title="New in: Daily selection from the worlds best brands."
              products={newProducts}
            />
            <FeatureSection
          title="Streetwear for anywhere"
          description="The world's greatest designers - Now on sale! T&C apply"
          buttonText="Shop now"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/27ea2a498441aad79bc1f49dd6372beb3fa2823073c9c23871be7b211087df66?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba"
          imageAlt="Streetwear collection"
        />
            <FeatureSection
          title="Sale Update: Now upto 60% off on select items"
          description="The world's greatest designers - Now on sale! T&C apply"
          buttonText="Shop now"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/257009a17ef1733b5ee3c518fb6f9771c820cd7d675cb52a6fc78d6e9de0bd45?placeholderIfAbsent=true&apiKey=6075100a88d44b09b2d6c5b584a495ba"
          imageAlt="Sale items"
          reverse={true}
        /><ProductSection
        title="New In"
        products={trendingProducts}
      />
      <ProductSection
        title="Trending now"
        products={trendingProducts}
      />
      <NewsletterSignup />
          </>
        }
      />
      <Route path='/products' element={<Products />} />
      {/* <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Registration />} />
      <Route path='/cart' element={<ShoppingCart />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route
        path='/paymentSuccessful/:paymentId/:orderId'
        element={<PaymentSuccessfulPage />}
      />
      <Route path='/NotFound' element={<ErrorPage />} />

      <Route path='*' element={<ErrorPage />} /> */}
    </Routes>
    <Footer />
  </Router>
  

  )
}

export default App
