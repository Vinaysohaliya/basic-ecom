import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-evenly items-center">
        <h1 className="text-xl font-bold">My Shop</h1>
        <Link to="/" className="text-sm font-medium">Home</Link>
        <Link to="/cart" className="text-sm font-medium">Cart</Link>

      </div>
    </header>
  );
};

export default Header;
