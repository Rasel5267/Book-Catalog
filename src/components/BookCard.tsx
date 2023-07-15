import { IBook } from '@/types/globalTypes';
import { Link } from 'react-router-dom';

const BookCard = (book: IBook) => {
  return (
    <Link
      to={`/book-details/${book._id}`}
      className="card bg-base-100 shadow-xl"
    >
      <figure>
        <img src={book.image} alt={book.title} className="w-[300px] h-64" />
      </figure>
      <div className="card-body">
        <div className="card-actions">
          <div className="badge badge-outline">{book.genre}</div>
        </div>
        <h2 className="card-title text-2xl">{book.title}</h2>
        <p>
          <b>By:</b> {book.author}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
