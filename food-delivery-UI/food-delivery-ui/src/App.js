import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;