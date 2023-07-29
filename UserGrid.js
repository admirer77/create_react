import React from 'react';
import UserCard from './UserCard';

const UserGrid = ({ users }) => {
  return (
    <div className="grid">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
