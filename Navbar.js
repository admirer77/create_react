import React from 'react';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav>
      <div className="brand">GetUsers.com</div>
      <button onClick={onGetUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
