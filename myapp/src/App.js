import React from 'react';
import Founders from './Components/Founders'
import Home from './Components/Home';
import Products from './Components/Products';
import Menu from './Components/Menu'
import About from './Components/About';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
    <Header /> 
    <Menu />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/founders" element={<Founders />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
    </Router>
  );
}
 
export default App;