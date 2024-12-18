import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;