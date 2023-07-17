import { AiOutlineUser } from 'react-icons/ai';

const Reviews = (review: object) => {
  return (
    <div className="flex items-center space-x-4 border-b py-2">
      <div className="border rounded p-2">
        <AiOutlineUser size={25} />
      </div>
      <div>
        <div className="text-sm font-semibold">{review?.reviewer?.name}</div>
        <h4 className="text-gray-500">{review?.review}</h4>
      </div>
    </div>
  );
};

export default Reviews;
