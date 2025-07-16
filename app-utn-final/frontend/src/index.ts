// frontend/src/types/index.ts
export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category?: string; // Asume que la categoría viene como string ID o nombre
    createdAt: string;
    updatedAt: string;
}

// Si también manejas categorías
export interface Category {
    _id: string;
    name: string;
    // ... otras propiedades de categoría
}