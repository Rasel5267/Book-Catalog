import AddReview from '@/components/AddReview';
import AddToReadingList from '@/components/AddToReadingList';
import AddToWishList from '@/components/AddToWishList';
import DeleteBook from '@/components/DeleteBook';
import Reviews from '@/components/Reviews';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();

  const storedAuthData = localStorage.getItem('auth');
  const authData = storedAuthData ? JSON.parse(storedAuthData) : null;

  const user = authData ? authData.user : null;

  const { data, isLoading } = useSingleBookQuery(id);

  const book = data?.data;

  let publisher = false;

  if (user != null) {
    if (user?.id === book?.publisher) {
      publisher = true;
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="card lg:card-side bg-base-100 shadow-xl py-8 px-8 rounded-none">
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
              {publisher && (
                <div className="card-actions flex justify-center mt-20 gap-8">
                  <Link to={`/books/edit/${book?._id}`}>
                    <AiOutlineEdit size={25} />
                  </Link>
                  <DeleteBook id={book?._id} />
                </div>
              )}
              <div className="card-actions flex justify-center mt-20 gap-8">
                <AddToWishList id={book?._id} />
                <AddToReadingList id={book?._id} />
              </div>
            </div>
          </div>
          <div className="px-8 bg-white pt-4 pb-8 card rounded-none">
            <div className="py-4 font-bold text-2xl">Reviews</div>
            <AddReview id={book?._id} />
            <Reviews id={book?._id} />
          </div>
        </>
      )}
    </>
  );
};

export default BookDetails;
