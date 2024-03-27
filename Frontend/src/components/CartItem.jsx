import React from 'react';

const CartItem = ({ name, price, quantity }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-2">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500">${price}</p>
      </div>
      <div>
        <p className="text-gray-500">Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
