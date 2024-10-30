import express from 'express';
import  connectDB  from './config/database';
//import taskRoutes from './routes/task.routes';
//import userRoutes from './routes/auth.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());

//app.use('/api/tasks', taskRoutes);
//app.use('/api/users', userRoutes);

app.use(errorHandler); // Use error handler for uncaught errors

connectDB();

export default app;

