import { DataTypes } from 'sequelize'
import sequelize from '@/library/sequelize'

const users = sequelize.define(
  'users',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    username: DataTypes.STRING(32),
    password: DataTypes.STRING(32),
    solt: DataTypes.STRING(32),
  },
  {
    timestamps: true,
    updatedAt: 'update_time',
    createdAt: 'create_time',
  },
)

module.exports = users
