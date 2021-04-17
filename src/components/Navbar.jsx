import React from 'react';

const NavBar = () => {
  return (
    <div className='navbar'>
      <h1>EMAK BLOG</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/create'>Create New Blog</a>
      </div>
    </div>
  );
};
export default NavBar;
