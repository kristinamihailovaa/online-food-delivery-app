import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import Menu from './components/menu/Menu';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Cart from './components/cart/Cart';
import OrderDetails from './components/order/OrderDetails';
import MyOrders from './components/order/MyOrders';
import OrderConfirmation from './components/order/OrderConfirmation';
import Error404 from './components/common/404';
import Admin from './components/admin/Admin';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/menu" exact element={<Menu />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/order" exact element={<OrderDetails />} />
            <Route path="/myOrders" exact element={<MyOrders />} />
            <Route path="/orderConfirm" exact element={<OrderConfirmation />} />
            <Route path="/admin/:itemId" exact element={<Admin />} />
            <Route path="/admin" exact element={<Admin />} />
            <Route path="*" exact element={<Error404 />} />
          </Routes>
          <Footer />
        </header>
      </ScrollToTop>
    </div>
  );
}

export default App;