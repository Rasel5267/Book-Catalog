import BookCard from '@/components/BookCard';
import Hero from '@/components/Hero';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  // Filter out any undefined items in the data array and create a shallow copy
  const validData: IBook[] =
    data?.data?.filter((item: IBook) => item.createdAt) || [];
  const sortedBooks: IBook[] = [...validData];

  // Sort the books based on createdAt in descending order
  sortedBooks.sort((a, b) => {
    const dateA = new Date(a.createdAt!).getTime(); // Here, we use 'a.createdAt!' to tell TypeScript that it's not undefined
    const dateB = new Date(b.createdAt!).getTime(); // Here, we use 'b.createdAt!' to tell TypeScript that it's not undefined
    return dateB - dateA;
  });

  // Get the first 10 recently added books
  const Books: IBook[] = sortedBooks.slice(0, 10);

  return (
    <div className="pb-8">
      {/* <Hero /> */}
      {isLoading ? (
        <div className="flex justify-center w-full h-[100vh]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 mt-8">
          {Books.map((book: IBook) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
