import Koa from 'koa'
import fs from 'fs'
import path from 'path'

export default (app: Koa) => {
  return async (ctx: Koa.Context, next: Koa.Next) => {
    const modelPath = path.join(__dirname, '/../', 'model')
    fs.readdirSync(modelPath)
      .filter((f) => f.endsWith('.ts'))
      .forEach((f) => {
        const filePath = path.join(modelPath, f)
        const [fileName] = f.split('.')
        if (!app.context.sql) app.context.sql = {}
        app.context.sql[fileName] = require(filePath)
      })

    await next()
  }
}
