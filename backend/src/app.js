import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import  {createRoles}   from './libs/initialsetup.js';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
createRoles();

app.use(cors({
  origin: process.env.FRONTEND_URL, // ← desde .env
  credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.use('/api', userRoutes);

export default app;