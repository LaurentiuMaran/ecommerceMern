import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import loginImage from '../../assets/login-image.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { register } from '../../utils/auth/register';
import { useToasts } from 'react-toast-notifications';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const Register = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handleSubmit = async (values) => {
    try {
      const { name, email, password } = values;
      await register(name, email, password, navigate);
      addToast('Registered successfully', { appearance: 'success' });
      navigate('/');
    } catch (error) {
      addToast('Failed to register', { appearance: 'error' });
    }
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex mt-4 mb-24">
        <div className="w-1/2">
          <img
            src={loginImage}
            alt="Register"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-1/2 p-10">
          <h1 className="text-3xl mb-2">Create an account</h1>
          <p className="mb-6">Enter your details below</p>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
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
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-black text-white rounded-full px-10 py-2"
                >
                  Register
                </button>
                <Link to="/login" className="text-black">
                  Login Instead
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
