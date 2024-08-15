import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const product = {
    id: 1,
    name: 'Nike Air Force 1',
    description: 'Air Force 1 Jester XX Black Sonic Yellow',
    price: 96,
    image: '/images/nike-af1.jpg',
  };

  it('renders product information correctly', () => {
    render(<ProductCard {...product} />);

    expect(screen.getByText(product.name));
    expect(screen.getByText(product.description));
    expect(screen.getByText(`$${product.price.toFixed(2)}`));
    expect(screen.getByAltText(product.name)).('src', product.image);
  });
});
