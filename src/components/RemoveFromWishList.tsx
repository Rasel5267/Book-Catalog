import { useRemoveFromWishListMutation } from '@/redux/features/user/userApi';
import { message } from 'antd';
import { AiOutlineDelete } from 'react-icons/ai';

const RemoveFromWishList = (id) => {
  const [removeFromWishList, { isLoading }] = useRemoveFromWishListMutation();

  const handleRemoveFromWishList = async () => {
    try {
      const response = await removeFromWishList(id);
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
        <button onClick={handleRemoveFromWishList}>
          <AiOutlineDelete size={25} fill="red" />
        </button>
      )}
    </>
  );
};

export default RemoveFromWishList;
