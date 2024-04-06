import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import DinoPage from './pages/DinoPage';
import Discover from './pages/Discover';
import ChartsPage from './pages/ChartsPage';
import SearchResults from './pages/SearchResults';
import { FilterProvider } from './components/Filter/FilterContext';
import NotFound from './pages/NotFound';

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
        path: '/searchresults',
        element: <SearchResults />,
      },
      {
        path: '/dino/:id',
        element: <DinoPage />,
      },
      {
        path: '/discover',
        element: <Discover />,
      },
      {
        path: '/charts',
        element: <ChartsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <FilterProvider>
      <RouterProvider router={router} />
    </FilterProvider>
  );
};

export default App;
