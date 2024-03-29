import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import NewsletterSubscribe from '../../components/NewsletterSubscribe/NewsletterSubscribe';
import Loader from '../../components/Loader/Loader';
import { getAllProducts } from '../../utils/products/getAllProducts';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getAllProducts();
      if (result) {
        setProducts(result);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10 flex-grow">
        <p className="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left ml-4">
          Products
        </p>
        {products ? (
          products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 items-center md:justify-items-start">
              {products.map((product) => (
                <div className="mx-auto">
                  <ProductCard
                    key={product._id}
                    product={{
                      id: product._id,
                      image: product.image,
                      name: product.name,
                      description: product.description,
                      price: `${product.price}`,
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center mt-32 md:mt-64">
              <p className="text-xl md:text-2xl font-bold">
                No products found.
              </p>
              <p className="text-xl md:text-2xl font-bold">
                Please try again later!
              </p>
            </div>
          )
        ) : (
          <div className="flex justify-center items-center mt-32 md:mt-64">
            <Loader />
          </div>
        )}
      </div>
      <NewsletterSubscribe />
      <Footer />
    </div>
  );
};

export default Shop;
