import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import { useToasts } from 'react-toast-notifications';
import ProductForm from '../../components/ProductForm/ProductForm';
import { createProduct } from '../../utils/products/createProduct';

const AdminCreateProduct = () => {
  const { addToast } = useToasts();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const productData = await createProduct(values);
    if (productData) {
      addToast('Product created successfully', {
        appearance: 'success',
      });
      resetForm();
    } else {
      addToast('An error occurred while creating the product', {
        appearance: 'error',
      });
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <DashboardMenu />
        <div className="flex-grow container mx-auto py-6 md:py-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Create Product
          </h1>
          <div className="w-full border-b border-black mt-6 md:mt-10"></div>
          <div className="mt-6 md:mt-12">
            <ProductForm onSubmit={handleSubmit} buttonLabel={'Add product'} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminCreateProduct;
