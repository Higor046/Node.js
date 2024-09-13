import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carregar variáveis de ambiente
console.log('Environment variables loaded.');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// Verifica se todas as variáveis de ambiente estão definidas
if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST) {
  throw new Error('Faltando variáveis de ambiente necessárias para a conexão com o banco de dados.');
}

// Configuração do Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: console.log, // Opcional, habilita o log das consultas SQL
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Testa a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1); // Opcional, encerra o processo se a conexão falhar
  });

export default sequelize;
