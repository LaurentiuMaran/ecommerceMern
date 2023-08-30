import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../utils/context/cartContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import NewsletterSubscribe from '../../components/NewsletterSubscribe/NewsletterSubscribe';
import { getProductById } from '../../utils/products/getProductById';
import { useToasts } from 'react-toast-notifications';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [state, dispatch] = useContext(CartContext);
  const { addToast } = useToasts();
  const [quantity, setQuantity] = useState(1);

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

  const handleAddToCart = () => {
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          ...product,
          id: product._id,
          quantity: parseInt(quantity, 10),
        },
      });
      addToast('Product added to cart', { appearance: 'success' });
    } catch (err) {
      addToast('Product could not be added to cart', { appearance: 'error' });
    }
  };

  if (!product) return <Loader />;

  return (
    <div className="bg-white flex flex-col min-h-screen flex-grow">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-start my-10 mb-16">
        <div className="w-full md:w-1/2 mx-auto mb-6 md:mb-0 md:mr-4 md:ml-4">
          <img
            className="w-full h-auto md:h-[700px] object-cover mx-auto"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <Link to="/shop" className="mb-5 text-gray-600 hover:underline">
            &larr; Back to Shop
          </Link>
          <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl mb-1">Manufacturer: {product.manufacturer}</p>
          <p className="text-xl mb-1">Category: {product.category}</p>
          <p className="text-xl mb-1">Stock: {product.stock}</p>
          <p className="text-2xl font-bold mb-2">${product.price}</p>
          <hr className="border-black mb-2 w-72 mx-auto md:mx-0" />
          <p className="text-lg mb-5">{product.description}</p>
          <div className="mb-6">
            <label className="mr-2">Quantity: </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <NewsletterSubscribe />
      <Footer />
    </div>
  );
};

export default ProductDetail;
