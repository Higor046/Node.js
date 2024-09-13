import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import bcrypt from 'bcryptjs';

// Interface que define os atributos do User
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Interface para a criação de um User
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Modelo User extendido com Model do Sequelize
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  // Método de instância para verificar a senha
  public async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

// Inicialização do modelo User com definição dos campos
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: true, // Adiciona os campos createdAt e updatedAt
  paranoid: true, // Adiciona o campo deletedAt para soft deletes
});

// Sincronizar o modelo com o banco de dados
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar modelos:', error);
  });

export default User;
