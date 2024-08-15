import React from 'react';

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const Product: React.FC<ProductProps> = ({ name, description, price, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-gray-900 font-semibold">${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
