import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import BookDetails from '@/pages/BookDetails';
import SignUp from '@/pages/Signup';
import AddNewBook from '@/pages/AddNewBook';
import Wishlist from '@/pages/Wishlist';
import ReadingList from '@/pages/ReadingList';
import FinishedBooks from '@/pages/FinishedBooks';
import AllBooks from '@/pages/AllBooks';
import { PrivateRoute, PublicRoute } from './PrivateRoute';
import EditBook from '@/pages/EditBook';
import SearchResult from '@/pages/SearchResult';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <AllBooks />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/search/:searchTerm',
        element: <SearchResult />,
      },
      {
        path: 'books/add-book',
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: 'books/edit/:id',
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/wish-list',
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: '/reading-list',
        element: (
          <PrivateRoute>
            <ReadingList />
          </PrivateRoute>
        ),
      },
      {
        path: '/finished-books',
        element: (
          <PrivateRoute>
            <FinishedBooks />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
