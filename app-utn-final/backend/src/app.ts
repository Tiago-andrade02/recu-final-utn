// backend/src/app.ts
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from './routes/product.routes';

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB (ajustá el URI según tu entorno)
mongoose.connect('mongodb://localhost:27017/utn-app')
  .then(() => console.log('🟢 Conectado a MongoDB'))
  .catch((err) => console.error('🔴 Error al conectar a MongoDB:', err));

// Rutas
app.use('/products', productRouter);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
    