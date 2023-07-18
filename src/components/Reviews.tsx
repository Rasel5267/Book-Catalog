import { useGetReviewQuery } from '../redux/features/books/bookApi';
import { IReview } from '../types/globalTypes';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const Reviews = ({ id }) => {
  const { data } = useGetReviewQuery(id);
  if (data?.data?.length) {
    return (
      <>
        {data?.data.map((review: IReview, index: number) => (
          <div
            key={index}
            className="flex items-center space-x-4 border-b py-2"
          >
            <div className="border rounded p-2">
              <AiOutlineUser size={25} />
            </div>
            <div>
              <div className="text-sm font-semibold">
                {review.reviewer.name}
              </div>
              <h4 className="text-gray-500">{review.review}</h4>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <div className="flex items-center">
        <h4>No Data Found...</h4>
      </div>
    );
  }
};

export default Reviews;
