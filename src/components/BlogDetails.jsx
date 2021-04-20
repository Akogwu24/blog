import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useEffect';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    `  http://localhost:8000/blogs/${id}`
  );

  return (
    <div className='blog-details'>
      {isPending && <h3>Loading...</h3>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
