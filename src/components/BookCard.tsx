import { IBook } from '@/types/globalTypes';
import '../styles/Book.css';
import { Link } from 'react-router-dom';

const BookCard = (book: IBook) => {
  return (
    <Link to={`/book-details/${book._id}`} className="book">
      <div className="image">
        <img src={book.image} alt={book.title} />
      </div>
      <h3>{book.title}</h3>
      <p>
        <b>By:</b> {book.author}
      </p>
      <p>
        <b>Genre:</b> {book.genre}
      </p>
    </Link>
  );
};

export default BookCard;
