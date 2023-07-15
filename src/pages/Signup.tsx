import { ISignUp } from '@/types/authType';
import { Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const SignUp = () => {
  const onFinishHandler = async (values: ISignUp) => {
    console.log(values);
    message.success('Form submitted successfully');
  };
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onFinishHandler} className="card p-4">
        <h1>Sign Up Form</h1>
        <Form.Item label="Name" name="name">
          <Input type="text" placeholder="Enter Your Name" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Enter Your Email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" placeholder="Enter Your Password" required />
        </Form.Item>
        <button className="submit-btn" type="submit">
          Sign Up
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
