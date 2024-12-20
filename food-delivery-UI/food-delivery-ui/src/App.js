import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import ScrollToTop from './components/Common/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <header className="App-header">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </header>
      </ScrollToTop>
    </div>
  );
}

export default App;