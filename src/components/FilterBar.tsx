// components/FilterBar.tsx

import React from 'react';

type FilterBarProps = {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ search, setSearch, category, setCategory }) => {
  const categories = ['Todos', 'Nike', 'Converse', 'New Balance', 'Asics'];

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar produto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <div className="flex space-x-2 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              category === cat
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
