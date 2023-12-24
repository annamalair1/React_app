import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const BASE_URL = 'http://localhost:8080';
  const LOGIN_ENDPOINT = '/api/login';
  const handleLogin = async (e) => {
    e.preventDefault();
    // Use a library like Axios to make a POST request to your Spring Boot backend
    try {
      const response = await axios.post(`${BASE_URL}${LOGIN_ENDPOINT}`, { username, password });
      // Handle successful login (e.g., store authentication token)
      console.log('Login successful!', response.data);
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
