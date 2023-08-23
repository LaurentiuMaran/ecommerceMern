import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CartContext } from '../../utils/context/cartContext';
import { createOrder } from '../../utils/orders/createOrder';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
});

const Checkout = () => {
  const [state] = useContext(CartContext);
  const { items } = state;

  const handleSubmit = async (values) => {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    try {
      await createOrder(values, items, totalPrice);
      // Handle successful order creation
    } catch (error) {
      // Handle error during order creation
    }
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
          onSubmit={handleSubmit}
        >
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
                <div className="flex justify-between mb-2">
                  <span>Total Price:</span>
                  <span className="font-bold">
                    ${items.reduce((total, item) => total + item.price, 0)}
                  </span>
                </div>
                <div className="flex flex-col mb-4">
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      className="text-black focus:ring-black border-gray-300"
                    />
                    <span className="ml-2">Card</span>
                  </label>
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      className="text-black focus:ring-black border-gray-300"
                    />
                    <span className="ml-2">Cash</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-black rounded-2xl text-white w-full py-2"
                >
                  Place Order
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
