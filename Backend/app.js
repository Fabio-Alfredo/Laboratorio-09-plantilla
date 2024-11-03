import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import errorHandler from './middlewares/errorHandler.js';
import { connectToDatabase } from './config/database.js';
import {config} from './config/config.js';

const app = express();
connectToDatabase();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Middleware de manejo de errores
app.use(errorHandler);


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
})
