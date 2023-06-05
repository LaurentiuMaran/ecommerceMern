import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../utils/context/cartContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { getProductById } from '../../utils/products/getProductById';
import { useToasts } from 'react-toast-notifications';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [state, dispatch] = useContext(CartContext);

  const { addToast } = useToasts();

  const handleAddToCart = () => {
    try {
      const isItemInCart = state.items.some((item) => item.id === product._id);
      if (isItemInCart) {
        addToast('Item already in cart', { appearance: 'warning' });
      } else {
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            id: product._id,
            image: product.image,
            name: product.name,
            description: product.description,
            price: product.price,
          },
        });
        addToast('Product added to cart', { appearance: 'success' });
      }
    } catch (err) {
      addToast('Product could not been added to cart', { appearance: 'error' });
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct.product);
      } catch (err) {
        addToast('An error occurred while fetching the product', {
          appearance: 'error',
        });
      }
    };

    fetchProduct();
  }, [addToast, id]);

  return (
    <div className="bg-background flex flex-col min-h-screen flex-grow">
      <Navbar />
      <Link
        to="/products"
        className="bg-gray-600 text-white rounded-full px-4 py-2 hover:bg-gray-800 transition-colors duration-300 absolute top-16 left-4 mt-7 flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Back to Products</span>
      </Link>
      <p className="text-5xl font-bold mx-auto py-10">
        {product ? product.name : <Loader />}
      </p>
      <div className="flex flex-col items-center py-10 w-full">
        {product ? (
          <>
            <div className="text-center w-full">
              <img
                className="h-96 w-full object-contain mx-auto"
                src={product.image}
                alt={product.name}
              />
              <button
                onClick={handleAddToCart}
                className="bg-primary text-white rounded-full px-10 py-3 mt-4 hover:bg-secondary transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10 w-full md:max-w-3xl mx-auto">
              <div className="p-6 rounded-lg">
                <p className="text-xl">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="text-xl">
                  <strong>Category:</strong> {product.category}
                </p>
              </div>
              <div className="p-6 rounded-lg">
                <p className="text-xl">
                  <strong>Stock:</strong> {product.stock}
                </p>
                <p className="text-xl">
                  <strong>Manufacturer:</strong> {product.manufacturer}
                </p>
              </div>
            </div>
            <div className="mt-4 w-full md:max-w-3xl mx-auto">
              <p className="text-xl">
                <strong>Description:</strong>
              </p>
              <p className="text-lg">{product.description}</p>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
