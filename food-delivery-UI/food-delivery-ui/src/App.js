import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import ScrollToTop from './components/Common/ScrollToTop';
import Menu from './components/MenuPage/Menu';
import Login from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <header className="App-header">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/menu" exact element={<Menu />} />
            <Route path="/login" exact element={<Login />} />
          </Routes>
        </header>
      </ScrollToTop>
    </div>
  );
}

export default App;