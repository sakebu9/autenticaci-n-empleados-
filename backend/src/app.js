import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // <-- ✨ IMPORTANTE

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';

const app = express();

// 🧩 Configurar CORS
app.use(cors({
  origin: 'http://localhost:3001', // dirección del frontend
  credentials: true, // permite enviar cookies o cabeceras de autenticación
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// 🔗 Rutas
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

export default app;
