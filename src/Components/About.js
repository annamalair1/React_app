import React from 'react';
import './list.css'
function About() {
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
        <h1>About</h1>
    </div>
  );
}

export default About;