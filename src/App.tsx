import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      }
      // {
      //   path: '/searchresult',
      //   element: <SearchResult />,
      // },
      // {
      //   path: '/dino/:id',
      //   element: <DinoInfo />,
      // },
      // {
      //   path: '/charts',
      //   element: <Charts />,
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
