export const posts = () => {
  return fetch('https://dummyjson.com/posts/');
};

export const posyById = ({ params }) => {
  return fetch(`https://dummyjson.com/posts/${params.id}`);
};
