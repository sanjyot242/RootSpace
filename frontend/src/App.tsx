import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import SalesPage from './pages/SalesPage';
import ProductPage from './pages/ProductPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/products' element={<Products />} /> */}
        <Route path='/sale' element={<SalesPage />} />
        <Route path='/productPage' element={<ProductPage />} />
        <Route path='/shoppingCart' element={<ShoppingCartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        {/* <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Registration />} />
      <Route path='/cart' element={<ShoppingCart />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route
        path='/paymentSuccessful/:paymentId/:orderId'
        element={<PaymentSuccessfulPage />}
      />
      <Route path='/NotFound' element={<ErrorPage />} /> */}

        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
