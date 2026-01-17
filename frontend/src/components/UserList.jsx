import React from 'react';

const UserList = ({ users, onDelete, loading }) => {
  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (users.length === 0) {
    return <div className="empty-state">No users yet. Add one above!</div>;
  }

  return (
    <div className="user-list">
      <h2>Users ({users.length})</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.created_at).toLocaleDateString()}</td>
              <td>
                <button 
                  onClick={() => onDelete(user.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;