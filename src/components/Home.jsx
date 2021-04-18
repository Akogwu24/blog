import React from 'react';
import { useState, useEffect } from 'react';
import blogData from '../BlogData';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(blogData);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect ran, render');
    console.log(blogs);
  }, [blogs]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
