// backend/models/Product.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define la interfaz para tu documento de producto
export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    category?: mongoose.Types.ObjectId; // Si tienes categorías
    createdAt: Date;
    updatedAt: Date;
}

const productSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
}, {
    timestamps: true,
});

// Usa IProduct como tipo para el modelo
const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;