import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Vans from './pages/Vans/Vans'

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
