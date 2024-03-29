import React from 'react';
import phoneIcon from '../../assets/phone-incoming.svg';
import emailIcon from '../../assets/email.svg';

const ContactForm = () => {
  return (
    <div className="bg-mainGray p-4 md:p-8 flex flex-col md:flex-row mt-6 md:mt-10 mb-6 md:mb-10">
      <div className="md:w-1/2 flex flex-col justify-between mb-4 md:mb-0">
        <div>
          <div className="flex items-center">
            <img src={phoneIcon} alt="Phone" className="w-6 h-6 mr-2" />
            <div className="text-xl text-gray-700">Call To Us</div>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +1 123 456 7890</p>
        </div>

        <hr className="my-4" />

        <div>
          <div className="flex items-center">
            <img src={emailIcon} alt="Email" className="w-6 h-6 mr-2" />
            <div className="text-xl text-gray-700">Write To Us</div>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>customer@bazaarbasket.com</p>
          <p>support@bazaarbasket.com</p>
        </div>
      </div>

      <div className="md:w-1/2 mt-4 md:mt-0 pl-0 md:pl-4">
        <form>
          <div className="mb-2 md:mb-4">
            <input
              className="w-full p-1 md:p-2 rounded border"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-2 md:mb-4">
            <input
              className="w-full p-1 md:p-2 rounded border"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-2 md:mb-4">
            <input
              className="w-full p-1 md:p-2 rounded border"
              type="tel"
              placeholder="Your Phone"
            />
          </div>
          <div className="mb-2 md:mb-4">
            <textarea
              className="w-full p-1 md:p-2 h-16 md:h-24 rounded border"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="bg-black text-white p-1 md:p-2 rounded-full w-48 md:w-64">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
