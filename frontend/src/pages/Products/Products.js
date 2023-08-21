import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader';
import { getAllProducts } from '../../utils/products/getAllProducts';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getAllProducts();
      if (result && result.success) {
        setProducts(result.products);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />
      <div className="container text-center mx-auto py-10 flex-grow">
        <p className="text-5xl font-bold mb-3">Products</p>
        {products ? (
          products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
              {products.map((product) => (
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
              ))}
            </div>
          ) : (
            <>
              <p className="text-2xl bold mt-64">No products found.</p>
              <p className="text-2xl bold">Please try again later!</p>
            </>
          )
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
