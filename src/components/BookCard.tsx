import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';
import AddToWishList from './AddToWishList';
import AddToReadingList from './AddToReadingList';

const BookCard = (book: IBook) => {
  return (
    <div className="rounded-xl shadow-lg">
      <div className="bg-white rounded-xl shadow-md h-full flex flex-col relative flex-shrink-0">
        <img
          src={book.image}
          alt={book.title}
          className="absolute w-full h-[55%] rounded-t-xl"
        />
        <div className="mt-[15.5rem] px-4 text-gray-700 flex-1">
          <h2 className="text-black font-extrabold text-2xl tracking-wide leading-none">
            <Link to={`/book-details/${book._id}`}>{book.title}</Link>
          </h2>
          <h3 className="text-sm mt-2 text-gray-500">{book.author}</h3>

          <div className="my-2 flex space-x-8 items-center">
            <p className="border px-2 py-1 rounded">{book.genre}</p>
            <p className="">{book.publicationDate}</p>
          </div>
          <div className="flex my-[0.8rem] space-x-10 justify-end">
            <div className="border rounded-full flex items-center px-2 py-1 hover:bg-emerald-600 hover:text-gray-100 transition-colors duration-300">
              <AddToWishList id={book._id} />
            </div>
            <div className="border rounded-full flex items-center p-2 hover:bg-emerald-600 hover:text-gray-100 transition-colors duration-300">
              <AddToReadingList id={book._id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

// <Link
//   to={`/book-details/${book._id}`}
//   className="card bg-base-100 shadow-xl"
// >
//   <figure>
//     <img src={book.image} alt={book.title} className="w-[300px] h-96" />
//   </figure>
//   <div className="card-body">
//     <div className="card-actions">
//       <div className="badge badge-outline">{book.genre}</div>
//     </div>
//     <h2 className="card-title text-2xl">{book.title}</h2>
//     <p>
//       <b>By:</b> {book.author}
//     </p>
//   </div>
// </Link>;
