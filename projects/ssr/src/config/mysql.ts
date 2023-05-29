export default {
  master: {
    host: '152.136.138.245',
    port: 3306,
    username: 'root',
    password: 'm',
    database: 'summer',
    dialect: 'mysql',
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      underscored: false,
      timestamps: true,
      freezeTableName: true,
    },
  }
}
