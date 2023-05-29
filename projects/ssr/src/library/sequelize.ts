import { Sequelize } from 'sequelize'

import db from '@/config/mysql'

const sequelize = new Sequelize(
  db.master.database,
  db.master.username,
  db.master.password,
  {
    host: db.master.host,
    // dialect: db.master.dialect,
    dialect: 'mysql',
    // operatorsAliases: db.master.operatorsAliases,
    pool: db.master.pool,
    define: db.master.define,
    port: db.master.port,
  },
)

export default sequelize
