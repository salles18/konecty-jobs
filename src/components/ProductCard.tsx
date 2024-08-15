
import React from 'react';

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductCard: React.FC<ProductProps> = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="mt-4">
          <span className="text-gray-800 font-bold text-xl">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
