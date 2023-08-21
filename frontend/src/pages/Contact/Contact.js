import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto py-6 md:py-10 px-4 md:px-0 flex-grow">
        <div className="text-center mb-6 md:mb-10">
          <p className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">Contact</p>
          <p className="text-xl md:text-2xl">We'd love to hear from you!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
              Email
            </h2>
            <p>support@bazaarbasket.com</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
              Phone
            </h2>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
              Address
            </h2>
            <p>123 Bazaar St</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">
              Social Media
            </h2>
            <p>Follow us on Twitter, Instagram, and Facebook!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
