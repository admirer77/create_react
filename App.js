import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import { getUsers } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar onGetUsers={handleGetUsers} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
}

export default App;
