import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10 px-4 md:px-0 flex-grow">
        <div className="text-center mb-10">
          <p className="text-5xl font-bold mb-3">404</p>
          <p className="text-3xl mb-12">Page Not Found</p>
          <p className="text-xl">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>
        <div className="text-center">
          <Link
            to="/products"
            className="text-2xl bg-primary text-white rounded-full px-10 py-3 hover:bg-secondary transition-colors duration-300"
          >
            Return to shop
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
