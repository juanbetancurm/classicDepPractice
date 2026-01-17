import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { userAPI } from './services/api';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await userAPI.getAll();
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users. Make sure the backend is running!');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (userData) => {
    setLoading(true);
    setError('');
    try {
      const response = await userAPI.create(userData);
      setUsers(prev => [...prev, response.data]);
      alert('User added successfully!');
    } catch (err) {
      setError('Failed to add user. Check if email is unique.');
      console.error('Error adding user:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }
    
    setError('');
    try {
      await userAPI.delete(id);
      setUsers(prev => prev.filter(user => user.id !== id));
      alert('User deleted successfully!');
    } catch (err) {
      setError('Failed to delete user.');
      console.error('Error deleting user:', err);
    }
  };

  return (
    <div className="App">
      <header>
        <h1> 😼 Olav's User Management</h1>
      </header>

      {error && (
        <div className="error-banner">
          ⚠️ {error}
        </div>
      )}

      <div className="container">
        <UserForm onSubmit={handleAddUser} loading={loading} />
        <UserList 
          users={users} 
          onDelete={handleDeleteUser} 
          loading={loading}
        />
      </div>

      <footer>
        <p>Backend: Django REST API (port 8000) | Frontend: React + Vite (port 5173)</p>
      </footer>
    </div>
  );
}

export default App;