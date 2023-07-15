import BookCard from '@/components/BookCard';
import Hero from '@/components/Hero';
import Books from '@/data/BooksData';

const Home = () => {
  return (
    <div className="pb-8">
      <Hero />
      <h1 className="text-5xl text-center mt-10 font-bold">Our Latest Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 mt-8">
        {Books.map((book) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
