import React from 'react';
import { Link } from 'react-router-dom';

const logout = () => {
  localStorage.removeItem('token');
}

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/friends'>Friends</Link>
      <Link to='/' onClick={logout}>Logout</Link>
    </nav>
  )
}

export default Navigation;
