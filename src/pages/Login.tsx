import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setAuth } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hook';
import { ILogin } from '@/types/authType';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onFinishHandler = async (values: ILogin) => {
    try {
      const response = await login(values);
      const data = response.data.data;
      if (response.error) {
        message.error(response.error.data.errorMessages[0].message);
      } else {
        localStorage.clear();
        dispatch(setAuth(data));
        message.success(response.data.message);
        navigate('/');
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
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
            <Form
              layout="vertical"
              onFinish={onFinishHandler}
              className="card p-4"
            >
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
                    Login
                  </button>
                )}
              </div>
              <p className="mt-3">
                Don&rsquo;t have an account? <Link to="/signup">Signup</Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
