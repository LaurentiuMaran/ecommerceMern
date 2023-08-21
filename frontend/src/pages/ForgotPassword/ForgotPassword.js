import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../components/TextInput/TextInput';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const ForgotPassword = () => {
  return (
    <div className="bg-background flex flex-col items-center min-h-screen">
      <div className="mt-20 w-full max-w-lg mx-auto px-4 sm:px-0">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Forgot Password
        </h2>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full">
              <div className="mb-4">
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="outline-none border-b border-gray-300 py-2 mb-4 w-full"
                />
              </div>
              <div className="mb-4">
                <Link
                  to="/login"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  Back to login
                </Link>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="bg-primary text-white rounded-full px-10 py-3 mt-4 hover:bg-secondary transition-colors duration-300 w-full"
                >
                  Send Reset Email
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
