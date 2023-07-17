import { message } from 'antd';
import { IBook } from '../types/globalTypes';
import { Link } from 'react-router-dom';
import { useGetFinishedBooksQuery } from '@/redux/features/user/userApi';
import RemoveFromFinishedBooks from '@/components/RemoveFromFinishedBooks';

const FinishedBooks = () => {
  const { data, error, isLoading } = useGetFinishedBooksQuery(undefined);

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
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full table-auto border">
          <thead>
            <tr className="text-sm font-medium text-gray-700 border border-gray-200">
              <th className="px-4 py-4 text-center border tracking-wide">
                Book Title
              </th>
              <th className="w-24 px-4 py-4 text-center border tracking-wide">
                Publish Date
              </th>
              <th className="w-24 px-4 py-4 text-center border tracking-wide">
                Genre
              </th>
              <th className="w-24 px-4 py-4 text-center border tracking-wide">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: IBook) => (
              <tr
                key={book._id}
                className="border hover:bg-gray-100 transition-colors"
              >
                <td className="whitespace-nowrap py-4 pl-2 flex gap-x-4 items-center">
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
                <td className="whitespace-nowrap font-medium text-center border">
                  {book.publicationDate.toString()}
                </td>
                <td className="whitespace-nowrap font-medium text-center border">
                  {book.genre}
                </td>
                <td className="whitespace-nowrap border">
                  <RemoveFromFinishedBooks id={book._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {books.map((book: IBook) => (
          <div key={book._id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={book.image} alt={book.title} />
                </div>
              </div>
              <div>
                <div className="font-bold">{book.title}</div>
              </div>
            </div>
            <div className="text-md py-2">By: {book.author}</div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="badge badge-outline">{book.genre}</div>
              <div className="badge badge-outline">
                {book.publicationDate.toString()}
              </div>
            </div>
            <div className="mt-4 text-right">
              <RemoveFromFinishedBooks id={book._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinishedBooks;
