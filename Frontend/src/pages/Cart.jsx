import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const address = formData.get('address');

    try {
      const response = await axios.post('http://localhost:3000/api/v1/placeorder', {
        firstName,
        lastName,
        address,
        cartItems: JSON.stringify(cartItems)
      });

      setSuccessMessage(response.data.message);
      toast.success("Order Placed");
      setErrorMessage('');

    } catch (error) {
      setErrorMessage(error.response.data.message);
      toast.error("Order Not Placed");
      setSuccessMessage(''); 

    }
    
  };

 

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-semibold mb-4">Cart</h1>

      <div className="space-y-4">
        {cartItems.map(item => (
          <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity} />
        ))}
      </div>
      <div className="mt-4">
          <p className="text-lg font-semibold">Total Price: ${total}</p>
        </div>
      <div className=' flex items-center justify-center'>
       

        <form onSubmit={handleSubmit} className="mt-8 w-60 flex items-center justify-center">
          <div className="flex flex-col space-y-4">
            <label htmlFor="firstName" className="text-lg font-semibold">First Name:</label>
            <input type="text" id="firstName" name="firstName" required className="border border-gray-300 rounded-lg px-4 py-2" />

            <label htmlFor="lastName" className="text-lg font-semibold">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required className="border border-gray-300 rounded-lg px-4 py-2" />

            <label htmlFor="address" className="text-lg font-semibold">Address:</label>
            <input type="text" id="address" name="address" required className="border border-gray-300 rounded-lg px-4 py-2" />

            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Place Order</button>
          </div>
        </form>
      </div>

      {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
      {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
    </div>
  );
};

export default Cart;
