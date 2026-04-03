import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/categories/Index';
import Products from './components/products/Index';
import ProductCreate from './components/products/Create';

function App() {
  return (
    <BrowserRouter>
      <div className="pt-16 min-h-screen bg-[#020617]">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/create" element={<ProductCreate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;