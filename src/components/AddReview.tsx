import { useAddReviewMutation } from '@/redux/features/books/bookApi';
import { Form, Input, message } from 'antd';
import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const AddReview = ({ id }) => {
  const [reviewInput, setReviewInput] = useState('');
  const [addReview, { isLoading }] = useAddReviewMutation();
  const onFinishHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const options = {
        id,
        values: {
          review: reviewInput,
        },
      };
      const response = await addReview(options);
      if (response.error) {
        message.error(response.error.data.errorMessages[0].message);
      } else {
        message.success(response.data.message);
        setReviewInput('');
      }
    } catch (error) {
      // Handle any unexpected errors here (e.g., network issues)
      console.error('Unexpected error occurred:', error);
      message.error('An unexpected error occurred. Please try again later.');
    }
  };
  return (
    <div className="w-full md:w-[50%] border mb-4">
      <form onSubmit={onFinishHandler} className="card w-full">
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="border-0 outline-none focus:inset-0 p-2 flex-1"
            placeholder="Write Review"
            required
            onChange={(e) => setReviewInput(e.target.value)}
          />
          {isLoading ? (
            <div className="flex justify-center items-center">
              <span className="loading loading-ring loading-md"></span>
            </div>
          ) : (
            <button type="submit" className="p-2 h-full">
              <AiOutlineSend />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddReview;
