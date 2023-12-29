import React, { useState, useEffect } from 'react';
function Founders() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data); // Ensure the data received matches the array format expected
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
 
  return (
    <div>
      <h1>Founders</h1>
      <ul>
        {/* Check if users array has data before mapping */}
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        ) : (
          <li>No users available</li>
        )}
      </ul>
    </div>
  );
}
 
export default Founders;