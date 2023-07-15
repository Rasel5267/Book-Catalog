// import BookCard from '@/components/BookCard';
// import { useGetBooksQuery } from '@/redux/api/apiSlice';
// import { IBook } from '@/types/globalTypes';

const AllBooks = () => {
  //   const { data, isLoading } = useGetBooksQuery(undefined);
  //   const Books = data?.data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-8">
      {/* {isLoading ? (
        <div className="flex justify-center w-[100vw]">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        Books.map((book: IBook) => <BookCard key={book._id} {...book} />)
      )} */}
    </div>
  );
};

export default AllBooks;
