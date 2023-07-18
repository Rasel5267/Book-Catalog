import { useGetWishlistQuery } from '@/redux/features/user/userApi';
import { message } from 'antd';
import { IBook } from '../types/globalTypes';
import { Link } from 'react-router-dom';
import AddToReadingList from '@/components/AddToReadingList';
import RemoveFromWishList from '@/components/RemoveFromWishList';

const Wishlist = () => {
  const { data, error, isLoading } = useGetWishlistQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center h-[100vh]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (error) {
    message.error(error.data.errorMessages[0].message);
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h4>No Data Found...</h4>
      </div>
    );
  }

  const books = data.data;

  return (
    <div className="w-[92%] mx-auto py-8">
      <div className="">
        <table className="">
          <thead>
            <tr className="">
              <th className="">Book Title</th>
              <th className="w-24 ">Publish Date</th>
              <th className="w-24 ">Genre</th>
              <th className="w-24 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: IBook) => (
              <tr key={book._id} className="">
                <td className="py-4 pl-2 flex gap-x-4 items-center">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                  />
                  <div>
                    <Link
                      to={`/book-details/${book._id}`}
                      className="text-lg font-semibold text-gray-700"
                    >
                      {book.title}
                    </Link>
                    <div className="font-medium text-gray-400">
                      {book.author}
                    </div>
                  </div>
                </td>
                <td className="">{book.publicationDate.toString()}</td>
                <td className="">{book.genre}</td>
                <td className="">
                  <div className="flex items-center justify-center">
                    <AddToReadingList id={book._id} />
                    <RemoveFromWishList id={book._id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
