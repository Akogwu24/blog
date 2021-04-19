import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <h1>EMAK BLOG</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create'>Create New Blog</Link>
      </div>
    </div>
  );
};
export default NavBar;
