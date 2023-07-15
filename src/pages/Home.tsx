import BookCard from '@/components/BookCard';
import Hero from '@/components/Hero';
import { useGetBooksQuery } from '@/redux/api/apiSlice';
import { IBook } from '@/types/globalTypes';

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const Books = data?.data?.slice(0, 10);
  return (
    <div className="pb-8">
      <Hero />
      <h1 className="text-5xl text-center mt-10 font-bold">Our Latest Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 mt-8">
        {isLoading ? (
          <div className="flex justify-center w-[100vw]">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          Books.map((book: IBook) => <BookCard key={book._id} {...book} />)
        )}
      </div>
    </div>
  );
};

export default Home;
