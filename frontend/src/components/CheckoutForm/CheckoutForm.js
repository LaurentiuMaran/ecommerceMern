import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../TextInput/TextInput';
import CheckboxInput from '../CheckboxInput/CheckboxInput';
import { CartContext } from '../../utils/context/cartContext';
import { createOrder } from '../../utils/orders/createOrder';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  address: Yup.string().required('Required'),
  address2: Yup.string(),
  country: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  sameAsBilling: Yup.bool(),
  saveInfo: Yup.bool(),
  acceptTerms: Yup.bool().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
});

const CheckoutForm = () => {
  const [state, dispatch] = useContext(CartContext);
  const cart = state.items;
  const orderItems = cart.items;
  const totalPrice = cart.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  );

  const navigate = useNavigate();
  const { addToast } = useToasts();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        address2: '',
        country: '',
        state: '',
        zip: '',
        sameAsBilling: false,
        saveInfo: false,
        acceptTerms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await createOrder(
          values,
          orderItems,
          totalPrice.toFixed(2)
        );

        if (response) {
          addToast('Order created successfully', { appearance: 'success' });
          dispatch({ type: 'CLEAR_CART' });
          navigate('/products');
        } else {
          addToast('Error creating order', { appearance: 'error' });
        }

        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="bg-white shadow-md rounded px-4 md:px-8 pt-4 md:pt-6 pb-4 md:pb-8 mb-4 text-left w-full md:w-1/2 mx-auto">
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <TextInput
            label="Address"
            name="address"
            type="text"
            placeholder="Address"
          />
          <TextInput
            label="Address 2 (Optional)"
            name="address2"
            type="text"
            placeholder="Address 2"
          />
          <TextInput
            label="Country"
            name="country"
            type="text"
            placeholder="Country"
          />
          <TextInput
            label="State"
            name="state"
            type="text"
            placeholder="State"
          />
          <TextInput label="Zip" name="zip" type="text" placeholder="Zip" />
          <CheckboxInput
            name="sameAsBilling"
            label="Shipping address is the same as my billing address"
          />
          <CheckboxInput
            name="saveInfo"
            label="Save this information for next time"
          />
          <CheckboxInput
            name="acceptTerms"
            label="I accept the terms and conditions"
          />
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-primary text-white rounded-full px-6 md:px-10 py-2 md:py-3 hover:bg-secondary transition-colors duration-300"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
