import Books from '@/data/BooksData';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const data = Books.filter((book) => book._id === id);
  console.log(data);

  return <div>BookDetails</div>;
};

export default BookDetails;
