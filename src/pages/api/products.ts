import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: 'Nike Precision VI ', category: 'Nike', description: 'Precision VI Masculino - Preto/Branco/Cinza', price: 89, image: '/images/tenisnike.jpg' },
  { id: 2, name: 'Converse Run Star', category: 'Converse', description: 'Run Star Hike Three Color Unisex', price: 90.8, image: '/images/runn.jpg' },
  { id: 3, name: 'Nike Air Jordan 1', category: 'Nike', description: 'Air Jordan 1 Retro High Obsidian UNC', price: 168, image: '/images/teste.webp' },
  { id: 4, name: 'Nike Air Force 1 Shadow', category: 'Nike', description: 'Air Force 1 Shadow Beige Pale Ivory', price: 114, image: '/images/air.webp' },
  { id: 5, name: 'New Balance 574', category: 'New Balance', description: 'Air Force 1 Jester XX Black Sonic Yellow', price: 96, image: '/images/new.webp' },
  { id: 6, name: 'Asics Gel-Kayano 5', category: 'Asics', description: 'Air Force 1 Jester XX Black Sonic Yellow', price: 99, image: '/images/asi.jpg' },
  { id: 7, name: 'Converse Player ', category: 'Converse', description: 'Converse player white', price: 90.8, image: '/images/player.png' },
  { id: 8, name: 'New Balance 327v1 ', category: 'New Balance', description: 'New Balance 327v1 female white', price: 87, image: '/images/nw.jpg' },
  { id: 9, name: 'Asics Gel-Nimbus ', category: 'Asics', description: 'Asics Gel Nimbus 26 Azul - Masculino', price: 70.8, image: '/images/azul.webp' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  const { category, name } = req.query;

  let filteredProducts = products;

  if (category && category !== 'Todos') {
    filteredProducts = filteredProducts.filter((product) => product.category === category);
  }

  if (name) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes((name as string).toLowerCase())
    );
  }

  res.status(200).json(filteredProducts);
}
