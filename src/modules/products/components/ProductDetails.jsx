import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products } from '../../../mockdata/ProductData';
import ProductCard from './ProductCard';
import LineChart from './LineChart';
import Layout from '../../../components/Layout';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct);
    const foundSimilarProducts = products.filter((p) => p.id !== productId);
    setSimilarProducts(foundSimilarProducts);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg shadow p-4">
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                  <p className="text-sm text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.985a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.985c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.985a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.589-1.81h4.184a1 1 0 00.95-.69l1.286-3.985z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{product.rating.toFixed(1)} / 5</span>
                </div>
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 2.25l5.486 1.37a1.125 1.125 0 01.86.868l.8 3.195a1.125 1.125 0 01-.284.986L7.605 11.53a17.717 17.717 0 008.865 8.865l2.861-1.507a1.125 1.125 0 01.986-.285l3.195.8a1.125 1.125 0 01.868.86l1.37 5.486a1.125 1.125 0 01-.2.99l-2.462 3.018" />
                  </svg>
                  <span className="text-gray-700">{product.phone}</span>
                </div>
                <div className="mb-3">
                  <span className="text-xl font-semibold text-gray-800">${product.price}</span>
                </div>
                <div>
                  <button className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Price Growth</h2>
                <button className="text-sm text-blue-600 hover:underline">see all</button>
              </div>
              <LineChart data={product.priceHistory} />
            </div>
            <div className="bg-white rounded-lg shadow p-4 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Reviews</h2>
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 py-3 text-gray-700">{review}</div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Similar Products</h2>
            <div className="flex flex-col gap-4">
              {similarProducts.map((similarProduct) => (
                <ProductCard key={similarProduct.id} product={similarProduct} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;