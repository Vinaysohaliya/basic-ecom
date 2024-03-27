import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1); 
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value); 
    setQuantity(newQuantity); 
  };

  const handleAddToCart = () => {
    try {
      dispatch(addToCart({ ...product, quantity })); 
      toast.success(`Item Added to Cart with quantity of ${quantity}`);
    } catch (error) {
      toast.error("Item Not added To Cart");
      throw error;
    }    
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col items-center justify-center mx-auto my-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-fill" />

      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-700 text-base">${product.price}</p>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="border-solid border-2 border-gray-300 rounded-lg p-1 mt-2 w-20"
        />
        <button
          onClick={handleAddToCart} 
          className="bg-slate-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
