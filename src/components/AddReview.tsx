import { useAddReviewMutation } from '@/redux/features/books/bookApi';
import { Form, Input, message } from 'antd';
import { AiOutlineSend } from 'react-icons/ai';

const AddReview = ({ id }) => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const onFinishHandler = async (values: string) => {
    try {
      const options = {
        id,
        values,
      };
      const response = await addReview(options);
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
    <div className="w-full md:w-[50%] flex border mb-4">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="card w-full"
      >
        <Form.Item name="review" className="m-0">
          <Input
            type="text"
            className="border-0 outline-none focus:inset-0"
            placeholder="Write Review"
            required
          />
        </Form.Item>
      </Form>
      <div className="form-control">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-ring loading-md"></span>
          </div>
        ) : (
          <button type="submit" className="p-2">
            <AiOutlineSend />
          </button>
        )}
      </div>
    </div>
  );
};

export default AddReview;
