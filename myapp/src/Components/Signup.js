import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const BASE_URL = 'http://localhost:8080';
  const SIGNUP_ENDPOINT = '/api/signup';
  const handleSignup = async (e) => {
    e.preventDefault();
    // Use a library like Axios to make a POST request to your Spring Boot backend
    try {
      const response = await axios.post(`${BASE_URL}${SIGNUP_ENDPOINT}`, { username, password });
      // Handle successful signup
      console.log('Signup successful!', response.data);
    } catch (error) {
      // Handle signup error
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
