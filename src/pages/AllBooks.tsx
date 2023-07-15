import BookCard from '@/components/BookCard';
import Books from '@/data/BooksData';
import '../styles/Home.css';

const AllBooks = () => {
  return (
    <div className="book-page">
      <div className="books">
        {Books.map((book) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
