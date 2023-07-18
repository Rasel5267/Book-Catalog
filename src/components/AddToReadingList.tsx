import { useAddToReadingListMutation } from '../redux/features/user/userApi';
import { message } from 'antd';
import React from 'react';
import { AiOutlineRead } from 'react-icons/ai';

const AddToReadingList = (id) => {
  const [addToReadingList, { isLoading }] = useAddToReadingListMutation();

  const handleAddToReadingList = async () => {
    try {
      const response = await addToReadingList(id);
      if (response.error) {
        message.error(response.error.data.errorMessages[0].message);
      } else {
        message.success(response.data.message);
      }
    } catch (error) {
      // Handle any unexpected errors here (e.g., network issues)
      console.error('Unexpected error occurred:', error);
      message.error('An unexpected error occurred. Please try again later.');
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <button onClick={handleAddToReadingList}>
          <AiOutlineRead size={25} />
        </button>
      )}
    </>
  );
};

export default AddToReadingList;
