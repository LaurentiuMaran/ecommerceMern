import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
import { login } from '../../utils/auth/login';
import { useToasts } from 'react-toast-notifications';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();

  return (
    <div className="bg-background flex flex-col items-center min-h-screen">
      <div className="mt-20 w-full max-w-lg mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Login</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await login(
                values.email,
                values.password,
                navigate
              );
              if (response) {
                addToast('Login successful', { appearance: 'success' });
              }
              return;
            } catch (error) {
              addToast('Error during login', { appearance: 'error' });
            } finally {
              setSubmitting(false);
              return;
            }
          }}
        >
          {(formik) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full">
              <TextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />
              <div className="flex justify-between my-4">
                <Link
                  to="/register"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  Register instead
                </Link>
                <Link
                  to="/forgot-password"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-primary text-white rounded-full px-10 py-3 hover:bg-secondary transition-colors duration-300 w-full"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
