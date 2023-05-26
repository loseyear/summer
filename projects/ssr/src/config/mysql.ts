import { createConnection } from 'typeorm'
import 'reflect-metadata'

export const mysqlConnection = async () => {
  try {
    const connection = await createConnection({
      type: 'mysql',
      host: '152.136.138.245',
      port: 3306,
      username: 'root',
      password: 'm',
      database: 'summer',
      entities: [__dirname + '../entities/*.ts'],
      synchronize: true,
      logging: true,
      poolSize: 10,
      extra: {
        connectionTimeout: 10000, // 连接超时时间（毫秒）
        acquireTimeout: 10000, // 获取连接超时时间（毫秒）
      },
    })
    console.log('db connect successfully. is Connected: ' + connection.isConnected)
  } catch (err) {
    console.log('db connect failed. error is: ' + err)
  }
}
