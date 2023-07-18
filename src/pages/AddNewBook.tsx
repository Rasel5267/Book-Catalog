import { Form, Input, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateBookMutation } from '../redux/features/books/bookApi';
import { IBook } from '../types/globalTypes';

const AddNewBook = () => {
  const navigate = useNavigate();
  const [createBook, { isLoading }] = useCreateBookMutation();

  const onFinishHandler = async (values: IBook) => {
    try {
      const response = await createBook(values);
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
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-[100%] md:w-[70%] lg:w-[60%] flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Create Book</h1>
            <Form
              layout="vertical"
              onFinish={onFinishHandler}
              className="card p-4"
            >
              <Form.Item label="Title" name="title">
                <Input type="text" placeholder="Enter Book Title" required />
              </Form.Item>
              <Form.Item label="Author" name="author">
                <Input
                  type="text"
                  placeholder="Enter Book Author Name"
                  required
                />
              </Form.Item>
              <Form.Item label="Image" name="image">
                <Input
                  type="text"
                  placeholder="Enter Book Image Url"
                  required
                />
              </Form.Item>
              <Form.Item label="Description" name="description">
                <Input
                  type="text"
                  placeholder="Enter Book Description"
                  required
                />
              </Form.Item>
              <Form.Item label="Genre" name="genre">
                <Input type="text" placeholder="Enter Book Genre" required />
              </Form.Item>
              <Form.Item label="Publish Date" name="publicationDate">
                <Input
                  type="text"
                  placeholder="Enter Book Publish Date"
                  required
                />
              </Form.Item>
              <div className="form-control">
                {isLoading ? (
                  <div className="flex justify-center">
                    <span className="loading loading-ring loading-lg"></span>
                  </div>
                ) : (
                  <button className="btn btn-primary" type="submit">
                    Create Book
                  </button>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
