import { ILogin } from '@/types/authType';
import { Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const onFinishHandler = async (values: ILogin) => {
    console.log(values);
    message.success('Form submitted successfully');
  };

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onFinishHandler} className="card p-4">
        <h1>Login Form</h1>
        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Enter Your Email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" placeholder="Enter Your Password" required />
        </Form.Item>
        <button className="submit-btn" type="submit">
          Login
        </button>
        <p className="form-text">
          Don&rsquo;t have an account? <Link to="/signup">Signup</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
