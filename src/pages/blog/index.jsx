import { Link, useLoaderData } from 'react-router-dom';

const Blog = () => {
  const { posts } = useLoaderData();
  console.log(posts);
  return (
    <>
      <h1>Blogs</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/blog/${post.id}`}>
            <div>{post.title}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blog;
