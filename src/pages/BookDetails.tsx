import Books from '@/data/BooksData';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const data = Books.find((book) => book._id === id);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={data?.image} alt={data?.title} className="w-[550px]" />
      </figure>
      <div className="card-body">
        <span>Author: {data?.author}</span>
        <h2 className="card-title text-5xl">{data?.title}</h2>
        <div className="card-actions mt-2">
          <div className="badge badge-outline">{data?.genre}</div>
          <div className="badge badge-outline">
            {data?.publicationDate.toString()}
          </div>
        </div>
        <span>{data?.description}</span>
        <div className="card-actions flex justify-center mt-20 gap-8">
          <button className="btn btn-primary">Add To Wishlist</button>
          <button className="btn btn-primary">Add To Reading List</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
