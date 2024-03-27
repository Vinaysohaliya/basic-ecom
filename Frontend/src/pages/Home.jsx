import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/product';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/allproducts/')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
        toast.success("You can See our Products")
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    <Loader/>    
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-semibold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow rounded p-4">
            <ProductCard product={product} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
