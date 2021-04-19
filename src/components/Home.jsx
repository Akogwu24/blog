import React from 'react';
import BlogList from './BlogList';
import useFetch from './useEffect';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    '  http://localhost:8000/blogs'
  );

  return (
    <div className='home'>
      {error && <h3> {error}</h3>}
      {isPending && <div>loading please wiat </div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  );
};
export default Home;
