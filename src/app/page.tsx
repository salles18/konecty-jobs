// pages/index.tsx
'use client'
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `/api/products?name=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}`
      );
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, [search, category]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Catálogo de Tênis</h1>
        <FilterBar search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
        <p className="text-gray-600 mb-4">{products.length} produtos encontrados</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
