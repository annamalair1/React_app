import React from 'react';
import './list.css'
function Home() {
    const textstyle = {
        backgroundColor: '#A5FBEF',
        minHeight: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'black',
        padding: '10px'
      };
    
      
  return (
    <div style={textstyle}>
        <h1>Home</h1>
    </div>
  );
}

export default Home;