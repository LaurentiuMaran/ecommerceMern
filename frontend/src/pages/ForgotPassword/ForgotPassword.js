import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import loginImage from '../../assets/login-image.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const ForgotPassword = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex mt-4 mb-24">
        <div className="w-1/2">
          <img
            src={loginImage}
            alt="Forgot Password"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-1/2 p-10">
          <h1 className="text-3xl mb-2">Forgot Password</h1>
          <p className="mb-6">Enter your email address below</p>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={() => {
              // Placeholder for future logic
            }}
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
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-black text-white rounded-full px-10 py-2"
                >
                  Submit
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

export default ForgotPassword;
