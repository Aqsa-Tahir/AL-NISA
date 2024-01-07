import React from 'react';

const Product = ({ name, description, price, imageUrl }) => {
  return (
    <div className="product p-2 border border-gray-300 rounded-md shadow-md">
      <img src={imageUrl} alt={name} className="w-full h-36 object-cover mb-4 rounded-md" />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-pink-600 mb-1 font-bold">{description}</p>
      <p className="text-green-600 font-bold">Rs{price}</p>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 focus:outline-none focus:shadow-outline-blue ">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

