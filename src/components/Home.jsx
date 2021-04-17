import React from 'react';
import { useState } from 'react';
import blogData from '../BlogData';

const Home = () => {
  const [blogs, setBlogs] = useState(blogData);

  return (
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2> {blog.title} </h2>
          <p>written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
export default Home;
