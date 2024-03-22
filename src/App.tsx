import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import DinoPage from './pages/DinoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
  {
    path: '/DinoPage',
    element: <DinoPage />
},
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
