import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from './routes/product.routes';

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/utn-app';

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('🟢 Conectado a MongoDB'))
  .catch(err => {
    console.error('🔴 Error al conectar a MongoDB:', err);
    process.exit(1); // Detener app si no conecta a BD
  });

// Rutas
app.use('/products', productRouter);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
