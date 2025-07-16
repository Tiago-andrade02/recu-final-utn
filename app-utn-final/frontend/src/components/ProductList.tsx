import React, { useState, useEffect } from 'react';
import { Product } from '../types/ProductType'; // Asegurate que esta ruta sea correcta
import { searchProductsByName } from '../services/productService'; // Debes tener este servicio

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const result = await searchProductsByName(searchTerm);
      setProducts(result);
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Buscar productos</h2>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong>: {product.description} (${product.price})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
