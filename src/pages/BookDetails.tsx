import AddReview from '../components/AddReview';
import AddToReadingList from '../components/AddToReadingList';
import AddToWishList from '../components/AddToWishList';
import DeleteBook from '../components/DeleteBook';
import Reviews from '../components/Reviews';
import { useSingleBookQuery } from '../redux/features/books/bookApi';
import React from 'react';
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
        <div className="w-[92%] mx-auto py-12">
          <div className="flex w-full flex-wrap md:flex-nowrap justify-between">
            <div className="max-w-[500px] max-h-[500px] mb-12 lg:mb-0">
              <img
                src={book?.image}
                alt={book?.title}
                className="w-full h-full "
              />
            </div>
            <div className="max-w-md md:ml-4 lg:max-w-full lg:ml-16">
              <p className="text-gray-500">
                <span className="font-semibold text-emerald-600">Author: </span>
                {book?.author}
              </p>
              <h2 className="text-3xl font-bold my-2">{book?.title}</h2>
              <div className="flex space-x-8 mb-2">
                <div className="py-1 px-2 bg-emerald-600 text-gray-200">
                  {book?.genre}
                </div>
                <div className="py-1 px-2 bg-emerald-600 text-gray-200">
                  {book?.publicationDate.toString()}
                </div>
              </div>
              <div className="my-4">
                <span className="text-gray-500">{book?.description}</span>
              </div>
              {publisher && (
                <div className="border-b flex my-8 pb-8 space-x-8">
                  <Link
                    to={`/books/edit/${book?._id}`}
                    className="border p-2 flex rounded-full"
                  >
                    <AiOutlineEdit size={25} />
                  </Link>
                  <div className="border p-2 flex rounded-full">
                    <DeleteBook id={book?._id} />
                  </div>
                </div>
              )}
              <div className="flex justify-end space-x-8">
                <div className="border p-2 flex rounded-full">
                  <AddToWishList id={book?._id} />
                </div>
                <div className="border p-2 flex rounded-full">
                  <AddToReadingList id={book?._id} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white pt-4 pb-8 card rounded-none">
            <div className="py-4 font-bold text-2xl">Reviews</div>
            <AddReview id={book?._id} />
            <Reviews id={book?._id} />
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
