import React from 'react';
import './list.css';
import {Link} from 'react-router-dom';
function Menu() {    
  return (
    <nav className='navbar'>
      
      <ul className="menu-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/founders">Founders</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;