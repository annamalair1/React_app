import React from 'react';
import './list.css'

function Products() {
    const textstyle = {
        backgroundColor: '#A5FBEF',
        minHeight: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'Black',
        padding: '10px'
      };
      
  return (
    <div style={textstyle}>
        <div>
          <h1>Products</h1>
        </div>
    </div>
  );
}

export default Products;