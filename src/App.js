import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Vans from './pages/Vans/Vans'
import VanDetails from './pages/VanDetails/VanDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/vans" element={<Vans />} />
       <Route path="/vans-details/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
