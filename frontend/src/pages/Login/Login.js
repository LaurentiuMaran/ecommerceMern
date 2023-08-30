import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import loginImage from '../../assets/login-image.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../utils/auth/login';
import { useToasts } from 'react-toast-notifications';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      await login(email, password, navigate);
      addToast('Logged in successfully', { appearance: 'success' });
      navigate('/');
    } catch (error) {
      addToast('Failed to log in', { appearance: 'error' });
    }
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col md:flex-row mt-4 mb-24">
        <div className="w-full md:w-1/2">
          <img
            src={loginImage}
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-10">
          <h1 className="text-3xl mb-2">Log in to BazaarBasket</h1>
          <p className="mb-6">Enter your details below</p>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <button
                  type="submit"
                  className="bg-black text-white rounded-full px-10 py-2 mb-2 md:mb-0"
                >
                  Log In
                </button>
                <div>
                  <Link to="/forgot-password" className="text-black">
                    Forget Password
                  </Link>
                  <span className="mx-2">|</span>
                  <Link to="/register" className="text-black">
                    Register Instead
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
