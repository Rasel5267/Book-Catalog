import BookCard from '@/components/BookCard';
import Books from '@/data/BooksData';

const AllBooks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-8">
      {Books.map((book) => (
        <BookCard key={book._id} {...book} />
      ))}
    </div>
  );
};

export default AllBooks;
