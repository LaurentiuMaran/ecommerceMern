import React, { useState } from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      review: 'Amazing service and fantastic product range! Highly recommend.',
    },
    {
      name: 'Jane Smith',
      review: 'The best online shopping experience I have ever had. 5 stars!',
    },
    {
      name: 'Emily Johnson',
      review: 'Quick delivery and excellent customer service. Will shop again.',
    },
    {
      name: 'Daniel Lee',
      review: 'I found everything I needed. Great variety and easy checkout.',
    },
    {
      name: 'Sarah Williams',
      review: 'The quality of the products is exceptional. Very satisfied.',
    },
    {
      name: 'Michael Brown',
      review: 'Great deals and quick delivery. Would definitely recommend.',
    },
    {
      name: 'Rachel Green',
      review: 'A wide selection and good prices. My go-to online store.',
    },
    {
      name: 'Robert Smith',
      review:
        'Convenient shopping and easy returns. What more could you ask for?',
    },
    {
      name: 'Sophia Lee',
      review: 'The customer support was very helpful. Had a great experience.',
    },
    {
      name: 'William Johnson',
      review: 'Excellent service and fast delivery. Very impressed.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState('fadeIn');

  const handlePrevious = () => {
    setFade('fadeOut');
    setTimeout(() => {
      if (currentIndex === 0) {
        setCurrentIndex(testimonialsData.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
      setFade('fadeIn');
    }, 300);
  };

  const handleNext = () => {
    setFade('fadeOut');
    setTimeout(() => {
      if (currentIndex === testimonialsData.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      setFade('fadeIn');
    }, 300);
  };

  return (
    <div className="w-full p-4 md:p-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8">
        Our Happy Customers
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <button onClick={handlePrevious} className="text-2xl mb-2 md:mb-0">
          ←
        </button>
        <div
          className={`border-mainGray border p-2 md:p-4 w-full md:w-80 ${fade}`}
        >
          <div className="flex justify-left mb-1 md:mb-2">
            {'⭐️ ⭐️ ⭐️ ⭐️ ⭐️'}
          </div>
          <div className="flex items-center">
            <h3 className="font-bold ml-1 text-md md:text-lg">
              {testimonialsData[currentIndex].name}
            </h3>
          </div>
          <p className="text-sm md:text-base">
            {testimonialsData[currentIndex].review}
          </p>
        </div>
        <button onClick={handleNext} className="text-2xl mt-2 md:mt-0">
          →
        </button>
      </div>
      <style jsx>{`
        .fadeIn {
          transition: opacity 0.3s ease-in-out;
          opacity: 1;
        }
        .fadeOut {
          transition: opacity 0.3s ease-in-out;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
