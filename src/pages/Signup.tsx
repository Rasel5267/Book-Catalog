import { ISignUp } from '@/types/authType';
import { Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const onFinishHandler = async (values: ISignUp) => {
    console.log(values);
    message.success('Form submitted successfully');
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
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
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
