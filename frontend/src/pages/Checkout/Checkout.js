import React, { useContext, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { CartContext } from '../../utils/context/cartContext';
import { createOrder } from '../../utils/orders/createOrder';
import { useToasts } from 'react-toast-notifications';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stripePromise = loadStripe(
  'pk_test_51JNamHFquAT5rbNDnLKKagpcCRumY6J6PnmaXxWgiWH7xwY7igr6ngzS3lGBfn0M9iFYve4ZZvBRnI1ZEIoz1R1R00zWiBOG8m'
);

const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
});

const CheckoutForm = ({ handleStripePayment, formValues }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { addToast } = useToasts();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      addToast(error.message, { appearance: 'error' });
    } else {
      handleStripePayment();
    }
  };

  return (
    <>
      <CardElement />
      <button
        onClick={handleSubmit}
        disabled={!stripe}
        className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-2xl mt-4 w-64"
      >
        Pay with Card
      </button>
    </>
  );
};

const Checkout = () => {
  const [state] = useContext(CartContext);
  const { items } = state;
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleStripePayment = async (formValues) => {
    try {
      const totalPrice = items.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );

      await createOrder(formValues, items, totalPrice);
      addToast('Payment and Order were successfully processed', {
        appearance: 'success',
      });
      navigate('/');
    } catch (error) {
      addToast('An error occurred while processing the payment and order', {
        appearance: 'error',
      });
    }
  };

  const handleCashPayment = async (values, { setSubmitting }) => {
    try {
      const totalPrice = items.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );

      await createOrder(values, items, totalPrice);
      addToast('Order was successfully placed', { appearance: 'success' });
      navigate('/');
    } catch (error) {
      addToast('An error occurred while placing the order', {
        appearance: 'error',
      });
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto p-4 mt-10 mb-24">
        <Formik
          initialValues={{
            fullName: '',
            address: '',
            country: '',
            state: '',
          }}
          validationSchema={validationSchema}
          onSubmit={paymentMethod === 'cash' ? handleCashPayment : null}
        >
          {({ values }) => (
            <Form className="flex flex-col md:flex-row">
              <div className="flex-grow md:mr-8 flex flex-col">
                <h2 className="text-xl font-bold mb-4">Billing Details</h2>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <Field
                    id="address"
                    name="address"
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Country
                  </label>
                  <Field
                    id="country"
                    name="country"
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-600"
                  >
                    State
                  </label>
                  <Field
                    id="state"
                    name="state"
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="md:ml-8 mt-4 md:mt-0 w-96">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="border p-4">
                  <div className="mb-4">
                    <label className="mr-4">Payment Method:</label>
                    <select
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="border p-2 rounded"
                    >
                      <option value="cash">Cash</option>
                      <option value="card">Card</option>
                    </select>
                  </div>

                  {paymentMethod === 'cash' ? (
                    <button
                      type="submit"
                      className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-2xl 2-64"
                    >
                      Pay with Cash
                    </button>
                  ) : (
                    <Elements stripe={stripePromise}>
                      <CheckoutForm
                        handleStripePayment={() => handleStripePayment(values)}
                        formValues={values}
                      />
                    </Elements>
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
