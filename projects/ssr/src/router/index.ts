import fs from 'fs';
import path from 'path';
import Router, { RouterContext } from 'koa-router';

type RouteHandler = (ctx: RouterContext<any, {}>) => Promise<void>;

const router = new Router<any, {}>({
  prefix: '/api',
})

const controllerPath = path.join(__dirname, '/../', 'controller')

fs
  .readdirSync(controllerPath)
  .filter((f) => f.endsWith('.ts'))
  .forEach(
    (fileName) => {
      const filePath = path.join(controllerPath, fileName)
      const route = require(filePath)

      Object.entries(route).forEach(([key, value]) => {
        const [method, endpoint] = key.split(' ')
        const routeHandler = value as RouteHandler
        (router[method.toLowerCase() as keyof Router<any, {}>] as any)(endpoint, routeHandler)
      })
    }
  )

export default () => router.routes()
