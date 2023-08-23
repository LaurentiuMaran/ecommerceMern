import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const ForgotPassword = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <Footer />
    </div>
  );
};

export default ForgotPassword;
