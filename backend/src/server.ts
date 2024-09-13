import express from 'express';
import sequelize from './config/db';
import userRoutes from './routes/auth';
import maskURL from './middleware/maskURL';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Habilita o CORS
app.use(maskURL);

app.use('/hidden/api/users', userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync();

    app.listen(5000, () => {
      console.log('Server started on http://localhost:5000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
