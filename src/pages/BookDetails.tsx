// import { useSingleBookQuery } from '@/redux/api/apiSlice';
// import { useParams } from 'react-router-dom';

const BookDetails = () => {
  //   const { id } = useParams();

  //   const { data, isLoading } = useSingleBookQuery(id);

  //   const book = data?.data;

  return (
    <>
      {/* {isLoading ? (
        <div className="flex justify-center w-[100vw]">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="card lg:card-side bg-base-100 shadow-xl py-8 px-8">
          <figure>
            <img src={book?.image} alt={book?.title} />
          </figure>
          <div className="card-body">
            <span>Author: {book?.author}</span>
            <h2 className="card-title text-5xl">{book?.title}</h2>
            <div className="card-actions mt-2">
              <div className="badge badge-outline">{book?.genre}</div>
              <div className="badge badge-outline">
                {book?.publicationDate.toString()}
              </div>
            </div>
            <span>{book?.description}</span>
            <div className="card-actions flex justify-center mt-20 gap-8">
              <button className="btn btn-primary">Add To Wishlist</button>
              <button className="btn btn-primary">Add To Reading List</button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default BookDetails;
