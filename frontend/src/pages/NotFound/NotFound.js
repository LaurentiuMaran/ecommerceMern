import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10 px-4 md:px-0 flex-grow">
        <div className="text-center mb-10">
          <p className="text-6xl font-bold mb-3 text-black">404 Not Found</p>

          <p className="text-4xl mb-12 text-black">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <div className="text-center">
          <Link
            to="/"
            className="text-2xl bg-black text-white rounded-full px-10 py-3 hover:bg-gray-700 transition-colors duration-300"
          >
            Back to home page
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
