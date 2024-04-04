import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import DinoPage from './pages/DinoPage';
import ChartsPage from './pages/ChartsPage';
import SearchResults from './pages/SearchResults';
import { FilterProvider } from './components/Filter/FilterContext';

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
      // {
      //   path: '/charts',
      //   element: <Charts />,
      // },
    ],
  },
  {
    path: '/dino/:id',
    element: <DinoPage />,
  },
  {
    path: '/charts',
    element: <ChartsPage />,
  }
]);

const App = () => {
  return (
    <FilterProvider>
      <RouterProvider router={router} />;
    </FilterProvider>
  );
};

export default App;
