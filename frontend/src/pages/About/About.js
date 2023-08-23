import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import StoryBanner from '../../components/StoryBanner/StoryBanner';
import Promises from '../../components/Promises/Promises';
import Achievements from '../../components/Achievements/Achievements';
import ContactForm from '../../components/ContactForm/ContactForm';
import NewsletterSubscribe from '../../components/NewsletterSubscribe/NewsletterSubscribe';

const About = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <StoryBanner />
      <Achievements />
      <ContactForm />
      <Promises />
      <NewsletterSubscribe />
      <Footer />
    </div>
  );
};

export default About;
