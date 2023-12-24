import React from 'react';
import './list.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
    <div className='logo-container'>
    <Link to="/">
    <img src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?size=626&ext=jpg&ga=GA1.1.1465512149.1703317180&semt=ais" alt="Logo" className="logo" />
    </Link>
    <h1>Welcome</h1>
    <Link className='cart-text' to="/cart">
    <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" alt="Cart" className="cart-logo" />
    <span>Cart</span>
    </Link>
    <h1><Link to="/Login">Login</Link></h1>
    <h1><Link to="/Signup">Signup</Link></h1>
    </div>
    );     
}

export default Header;
