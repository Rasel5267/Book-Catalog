import BookCard from '@/components/BookCard';
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { IBook } from '@/types/globalTypes';
import { useState, useEffect } from 'react';

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const Books = data?.data;

  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPublicationDate, setSelectedPublicationDate] = useState('');
  const [filteredGenres, setFilteredGenres] = useState<IBook[]>(Books || []);
  const [filteredPublicationDates, setFilteredPublicationDates] = useState<
    string[]
  >([]);

  const genres = [...new Set(Books?.map((book: IBook) => book.genre))];

  const extractYearFromDate = (date: string) => {
    return new Date(date).getFullYear().toString();
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
    setSelectedPublicationDate('');
  };

  const handlePublicationDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPublicationDate(event.target.value);
  };

  useEffect(() => {
    // Filter books by selected genre
    const filteredBooks = selectedGenre
      ? Books?.filter((book: IBook) => book.genre === selectedGenre) || []
      : Books || [];

    setFilteredGenres(filteredBooks);

    // Update filteredPublicationDates when selectedGenre changes
    const publicationYears: any = [
      ...new Set(
        filteredBooks.map((book: IBook) =>
          extractYearFromDate(book.publicationDate)
        )
      ),
    ];

    setFilteredPublicationDates(publicationYears);
  }, [selectedGenre, Books]);

  const filteredBooks = selectedPublicationDate
    ? filteredGenres.filter(
        (book: IBook) =>
          extractYearFromDate(book.publicationDate) === selectedPublicationDate
      )
    : filteredGenres;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="w-[92%] mx-auto flex justify-between md:justify-evenly items-center space-x-2 py-8">
            <select
              className="select select-primary w-full max-w-xs"
              value={selectedGenre}
              onChange={handleGenreChange}
            >
              <option value="">All Genres</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <select
              className="select select-primary w-full max-w-xs"
              value={selectedPublicationDate}
              onChange={handlePublicationDateChange}
            >
              <option value="">All Dates</option>
              {filteredPublicationDates.map((date: string, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-8">
            {filteredBooks.map((book: IBook) => (
              <BookCard key={book._id} {...book} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllBooks;
