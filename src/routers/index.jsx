import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../layouts';
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/blog';
import BlogId from '../pages/blog/_id';

import { posts, posyById } from '../apis/loadData';

import PageError from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: posts,
      },
      {
        path: '/blog/:id',
        element: <BlogId />,
        loader: posyById,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
