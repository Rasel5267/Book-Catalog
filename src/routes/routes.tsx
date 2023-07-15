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
        path: '/add-book',
        element: <AddNewBook />,
      },
      {
        path: '/wish-list',
        element: <Wishlist />,
      },
      {
        path: '/reading-list',
        element: <ReadingList />,
      },
      {
        path: '/finished-books',
        element: <FinishedBooks />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
