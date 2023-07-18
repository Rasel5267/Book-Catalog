import React from 'react';
import { useRegisterMutation } from '../redux/features/auth/authApi';
import { ISignUp } from '../types/authType';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const onFinishHandler = async (values: ISignUp) => {
    try {
      const response = await register(values);
      if (response.error) {
        message.error(response.error.data.errorMessages[0].message);
      } else {
        message.success(response.data.message);
        navigate('/login');
      }
    } catch (error) {
      // Handle any unexpected errors here (e.g., network issues)
      console.error('Unexpected error occurred:', error);
      message.error('An unexpected error occurred. Please try again later.');
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Signup now!</h1>
            <Form
              layout="vertical"
              onFinish={onFinishHandler}
              className="card p-4"
            >
              <Form.Item label="Name" name="name">
                <Input type="text" placeholder="Enter Your Name" required />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" placeholder="Enter Your Email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input
                  type="password"
                  placeholder="Enter Your Password"
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
                    Sign Up
                  </button>
                )}
              </div>
              <p className="mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
