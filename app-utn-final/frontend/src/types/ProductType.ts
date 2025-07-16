// frontend/src/types/ProductType.ts

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  createdAt: string;
  updatedAt: string;
}
