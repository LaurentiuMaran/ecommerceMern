import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
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

  return (
    <div className="bg-background flex flex-col items-center min-h-screen">
      <div className="mt-20 w-full max-w-lg mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Register</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await register(
              values.name,
              values.email,
              values.password,
              navigate
            );
            if (response) {
              addToast('Registration successful', { appearance: 'success' });
            } else {
              addToast('Registration failed', { appearance: 'error' });
            }
            setSubmitting(false);
          }}
        >
          {(formik) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full">
              <TextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
                className="outline-none border-b border-gray-300 py-2 mb-4 w-full"
              />
              <TextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                className="outline-none border-b border-gray-300 py-2 mb-4 w-full"
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                className="outline-none border-b border-gray-300 py-2 mb-4 w-full"
              />
              <div className="mb-3">
                <Link
                  to="/login"
                  className="text-primary hover:text-secondary transition-colors duration-300 mb-4"
                >
                  Back to login
                </Link>
              </div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-primary text-white rounded-full px-10 py-3 hover:bg-secondary transition-colors duration-300 w-full"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
