import { useLoaderData } from 'react-router-dom';

const SinglePost = () => {
  const postById = useLoaderData();
  const likes = postById?.reactions?.likes;

  return (
    <div>
      <h1>{postById?.title}</h1>
      <p>{postById?.body}</p>
      <div>{likes && ` ♥️ ${likes}`}</div>
    </div>
  );
};

export default SinglePost;
