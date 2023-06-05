import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../TextInput/TextInput';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  price: Yup.number().required('Required').positive('Price must be positive'),
  description: Yup.string().required('Required'),
  image: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  manufacturer: Yup.string().required('Required'),
  stock: Yup.number()
    .required('Required')
    .positive('Stock must be positive')
    .integer('Stock must be an integer'),
});

const ProductForm = ({
  initialValues = {
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
    manufacturer: '',
    stock: '',
  },
  onSubmit,
  buttonLabel,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left w-1/2 mx-auto">
          <div className="text-left">
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <TextInput
              label="Price"
              name="price"
              type="number"
              placeholder="Price"
            />
            <TextInput
              label="Description"
              name="description"
              type="text"
              placeholder="Description"
            />
            <TextInput
              label="Image URL"
              name="image"
              type="url"
              placeholder="Image URL"
            />
            <TextInput
              label="Category"
              name="category"
              type="text"
              placeholder="Category"
            />
            <TextInput
              label="Manufacturer"
              name="manufacturer"
              type="text"
              placeholder="Manufacturer"
            />
            <TextInput
              label="Stock"
              name="stock"
              type="number"
              placeholder="Stock"
            />
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="bg-primary text-white rounded-full px-10 py-3 hover:bg-secondary transition-colors duration-300 text-left"
            >
              {buttonLabel}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
