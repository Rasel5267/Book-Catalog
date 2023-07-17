import BookCard from '@/components/BookCard';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const Books = data?.data;
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-8">
          {Books.map((book: IBook) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllBooks;
