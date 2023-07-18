import { useDeleteBookMutation } from '@/redux/features/books/bookApi';
import { message } from 'antd';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const DeleteBook = (id) => {
  const navigate = useNavigate();
  const [deleteBook, { isLoading }] = useDeleteBookMutation();

  const handleDeleteBook = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this book?'
    );
    if (confirmDelete) {
      try {
        const response = await deleteBook(id);
        if (response.error) {
          message.error(response.error.data.errorMessages[0].message);
        } else {
          message.success(response.data.message);
          navigate('/books');
        }
      } catch (error) {
        // Handle any unexpected errors here (e.g., network issues)
        console.error('Unexpected error occurred:', error);
        message.error('An unexpected error occurred. Please try again later.');
      }
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <button onClick={handleDeleteBook}>
          <AiOutlineDelete size={25} fill="red" />
        </button>
      )}
    </>
  );
};

export default DeleteBook;
