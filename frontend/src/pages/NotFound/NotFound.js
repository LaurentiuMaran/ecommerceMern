import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto flex-grow flex flex-col justify-center items-center py-4 px-4 md:px-0">
        <div className="text-center mb-6 md:mb-10">
          <p className="text-4xl md:text-6xl font-bold mb-2 md:mb-3 text-black">
            404 Not Found
          </p>
          <p className="text-2xl md:text-4xl mb-8 md:mb-12 text-black">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <div className="text-center">
          <Link
            to="/"
            className="text-xl md:text-2xl bg-black text-white rounded-full px-8 md:px-10 py-2 md:py-3 hover:bg-gray-700 transition-colors duration-300"
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
