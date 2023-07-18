import BookCard from '@/components/BookCard';
import { useGetSearchBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';
import { useParams } from 'react-router-dom';

const SearchResult = () => {
  const { searchTerm } = useParams();

  const { data, isLoading } = useGetSearchBooksQuery(searchTerm);
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        {isLoading ? (
          <div className="flex justify-center h-[100vh]">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <h4>No Data Found...</h4>
        )}
      </div>
    );
  }

  const Books = data?.data;
  return (
    <div>
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
    </div>
  );
};

export default SearchResult;
