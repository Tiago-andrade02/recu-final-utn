
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const searchProductsByName = async (name: string) => {
  const response = await fetch(`${API_URL}/products/search?name=${encodeURIComponent(name)}`);
  if (!response.ok) {
    throw new Error('Error al buscar productos');
  }
  return response.json();
};
